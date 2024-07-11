import { useState, useEffect } from "react";
import axios from "axios";
import { ShowSchools } from "./ShowSchools";
import { GetSchoolInputs } from "./GetSchoolInputs";

export default function Schools() {
    const [foundSchools, setFoundSchools] = useState([]);
    const [schoolName, setSchoolName] = useState("");
    const [schoolRegion, setSchoolRegion] = useState("");
    const baseURL = "https://schools-database.onrender.com/api";

    async function findSchools() {
        try {
            const results = await axios.get(`${baseURL}/get-schools`);
            setFoundSchools(results.data);
        } catch (error) {
            console.log("Error occurred while fetching schools", error);
        }
    }
    useEffect(() => {
        findSchools();
    }, []);

    async function createSchool(event) {
        event.preventDefault();
        try {
            const results = await axios.post(`${baseURL}/create-school`, {
                name: schoolName,
                region: schoolRegion,
            });
            if (results.data) await findSchools();
        } catch (error) {
            console.log("Error occurred while create a school", error);
        }
    }
    useEffect(() => {
        createSchool();
    })
    async function schoolNameHandler(event) {
        setSchoolName(event.target.value);
    }
    async function schoolRegionHandler(event) {
        setSchoolRegion(event.target.value);
    }

    return (
        <>
            <GetSchoolInputs
                onCreateSchoolHandler={createSchool}
                onSchoolNameHandler={schoolNameHandler}
                onSchoolRegionHandler={schoolRegionHandler}
            />
            <ShowSchools foundSchools={foundSchools} />
        </>
    );
}
