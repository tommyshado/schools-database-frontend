import { useState, useEffect } from "react";
import axios from "axios";
import { RenderSchools } from "./RenderSchools";
import { AddSchool } from "../routes/AddSchool";
import baseURL from "../utils/api";
import { SearchForSchool } from "../routes/SearchForSchool";

export default function Schools() {
    const [foundSchools, setFoundSchools] = useState([]);
    const [schoolName, setSchoolName] = useState("");
    const [schoolRegion, setSchoolRegion] = useState("");
    const [addName, setAddName] = useState("");
    const [addRegion, setAddRegion] = useState("");

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

    // ******************************************** createSchool adds a new school ************************************************* //
    async function createSchool(nameOfSchool, regionOfSchool) {
        try {
            const results = await axios.post(`${baseURL}/create-school`, {
                name: nameOfSchool,
                region: regionOfSchool,
            });
            if (results.data) await findSchools();
        } catch (error) {
            console.log("Error occurred while create a school", error);
        }
    }
    function schoolNameHandler(event) {
        setAddName(event.target.value);
    }
    function schoolRegionHandler(event) {
        setAddRegion(event.target.value);
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
    function searchSchoolNameHandler(event) {
        setSchoolName(event.target.value);
    }
    function searchSchoolRegionHandler(event) {
        setSchoolRegion(event.target.value);
    }

    async function onCreateSchoolHandler(event) {
        event.preventDefault();
        await createSchool(addName, addRegion);
        setAddName("");
        setAddRegion("");
    }

    async function onFindSchoolHandler(event) {
        event.preventDefault();
        await findSchool(schoolName, schoolRegion);
        if (foundSchools) {
            setSchoolName("");
            setSchoolRegion("");
        }
    }
    
    async function resetFoundSchools(event) {
        event.preventDefault();
        await findSchools();
        setSchoolName("");
        setSchoolRegion("");
    }

    return (
        <>
            <AddSchool
                onSchoolNameHandler={schoolNameHandler}
                onSchoolRegionHandler={schoolRegionHandler}
                nameValue={addName}
                regionValue={addRegion}
                onCreateSchoolHandler={onCreateSchoolHandler}
            />
            <SearchForSchool
                onNameHandler={searchSchoolNameHandler}
                onRegionHandler={searchSchoolRegionHandler}
                nameValue={schoolName}
                regionValue={schoolRegion}
                onFindSchoolHandler={onFindSchoolHandler}
                resetFoundSchools={resetFoundSchools}
            />
            <RenderSchools foundSchools={foundSchools} />
        </>
    );
}
