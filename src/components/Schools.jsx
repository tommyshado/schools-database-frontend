import { useState, useEffect } from "react";
import axios from "axios";
import { RenderSchools } from "./RenderSchools";
import { AddSchool } from "./AddSchool";
import baseURL from "../utils/api";
import { SearchForSchool } from "./SearchForSchool";

export default function Schools() {
    const [foundSchools, setFoundSchools] = useState([]);
    const [schoolName, setSchoolName] = useState("");
    const [schoolRegion, setSchoolRegion] = useState("");

    // ******************************************** findSchools fetches all schools *********************************************** //
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

    // ******************************************** addSchool adds a new school ************************************************* //
    async function createSchool(apiURL) {
        try {
            const results = await axios.post(`${apiURL}/create-school`, {
                name: schoolName,
                region: schoolRegion,
            });
            if (results.data) await findSchools();
        } catch (error) {
            console.log("Error occurred while create a school", error);
        }
    }
    async function schoolNameHandler(event) {
        setSchoolName(event.target.value);
    }
    async function schoolRegionHandler(event) {
        setSchoolRegion(event.target.value);
    }

    // ************************************** findSchool searches for a specific school *************************************** //
    async function findSchool(name, region) {
        try {
            const results = await axios.get(
                `${baseURL}/school-search?school=${name}&region=${region}`
            );
            setFoundSchools(results.data);
        } catch (error) {
            console.log(
                "Error occurred while fetching a school by name and region",
                error
            );
        }
    }
    async function searchSchoolNameHandler(event) {
        setSchoolName(event.target.value);
    }
    async function searchSchoolRegionHandler(event) {
        setSchoolRegion(event.target.value);
    }

    return (
        <>
            <AddSchool
                onCreateSchoolHandler={(event) => {
                    event.preventDefault();
                    createSchool(baseURL);
                }}
                onSchoolNameHandler={schoolNameHandler}
                onSchoolRegionHandler={schoolRegionHandler}
            />
            <SearchForSchool
                onFindSchoolHandler={(event) => {
                    event.preventDefault();
                    findSchool(schoolName, schoolRegion);
                }}
                onNameHandler={searchSchoolNameHandler}
                onRegionHandler={searchSchoolRegionHandler}
            />
            <RenderSchools foundSchools={foundSchools} />
        </>
    );
}
