import { Fragment } from "react";
import AgeStats from "./AgeStats";
import GenderStats from "./GenderStats";
import RegionStats from "./RegionStats";


function Stats() {
    return (  <Fragment>
        <AgeStats/>
        <RegionStats/>
        <GenderStats/>
    </Fragment>);
}

export default Stats;