import React, { ChangeEvent, useEffect, useState } from "react";

export type IJob = {
  position: string;
  company: string;
  experinceFrom: string;
  experinceTo: string;
};

type IProps = {
  updateInputState: (jobs: IJob[]) => void;
};

export default function Experience(props: IProps) {
  const [jobs, setJobs] = useState<IJob[]>([]);

  useEffect(() => {
    props.updateInputState(jobs); // update CvInput state after updating Experience state
  }, [jobs]);

  // saves text from input into state
  function handleInputChange(event: ChangeEvent) {
    const inputElement = event.target as HTMLInputElement;
    const key = inputElement.id as keyof IJob; // ID's are the same as job's keys
    const inputText = inputElement.value;
    const jobElement = inputElement.parentNode as HTMLFieldSetElement;
    const jobID = parseInt(jobElement.dataset.jobid); // is same as index in jobs array

    const jobsCopy = [...jobs];
    jobsCopy[jobID][key] = inputText;

    setJobs(jobsCopy);
  }

  function addJob() {
    const newJob = {
      position: "",
      company: "",
      experinceFrom: "",
      experinceTo: ""
    };

    setJobs(jobs.concat(newJob));
  }

  function removeJob(jobID: string) {
    const filteredJobs = jobs.filter((job, index) => {
      return index !== parseInt(jobID); // keep only jobs with different index than the one to be removed
    });

    setJobs(filteredJobs);
  }

  const experienceElements = jobs.map((job, index) => {
    return (
      <fieldset key={index} data-jobid={index}>
        <label htmlFor="position">Position</label>
        <input onChange={handleInputChange} type="text" id="position"></input>

        <label htmlFor="company">Company</label>
        <input onChange={handleInputChange} type="text" id="company"></input>

        <label htmlFor="experinceFrom">From</label>
        <input onChange={handleInputChange} type="text" id="experinceFrom"></input>

        <label htmlFor="experinceTo">To</label>
        <input onChange={handleInputChange} type="text" id="experinceTo"></input>

        <button
          className="delete"
          onClick={(event) => {
            event.preventDefault();
            const buttonElement = event.target as HTMLButtonElement;
            const jobElement = buttonElement.parentNode as HTMLFieldSetElement;
            const jobID = jobElement.dataset.jobid;

            removeJob(jobID);
          }}
        >
          Delete
        </button>
      </fieldset>
    );
  });

  return (
    <fieldset className="experience">
      <legend>Experience</legend>

      {experienceElements}

      <button
        onClick={(event) => {
          event.preventDefault();
          addJob();
        }}
        className="add"
      >
        Add
      </button>
    </fieldset>
  );
}
