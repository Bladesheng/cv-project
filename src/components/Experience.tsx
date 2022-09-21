import React, { ChangeEvent } from "react";

export type IJob = {
  position: string;
  company: string;
  experinceFrom: string;
  experinceTo: string;
};

export type IStateExperience = {
  jobs: IJob[];
};

type IProps = {
  updateInputState: (state: IStateExperience) => void;
};

class Experience extends React.Component<IProps, IStateExperience> {
  constructor(props: IProps) {
    super(props);

    this.state = {
      jobs: []
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.addJob = this.addJob.bind(this);
    this.removeJob = this.removeJob.bind(this);
  }

  handleInputChange(event: ChangeEvent) {
    const inputElement = event.target as HTMLInputElement;
    const key = inputElement.id as keyof IJob; // ID's are the same as job's keys
    const inputText = inputElement.value;
    const jobElement = inputElement.parentNode as HTMLFieldSetElement;
    const jobID = jobElement.dataset.jobid; // is same as index in jobs array

    const jobsCopy = this.state.jobs;
    const job = jobsCopy[parseInt(jobID)];
    job[key] = inputText;

    this.setState(
      {
        ...this.state,
        jobs: jobsCopy
      },
      () => {
        this.props.updateInputState(this.state); // update Input state after updating Education state
      }
    );
  }

  addJob() {
    const newJob = {
      position: "",
      company: "",
      experinceFrom: "",
      experinceTo: ""
    };

    this.setState(
      {
        ...this.state,
        jobs: this.state.jobs.concat(newJob)
      },
      () => {
        this.props.updateInputState(this.state);
      }
    );
  }

  removeJob(jobID: string) {
    const filteredJobs = this.state.jobs.filter((job, index) => {
      return index !== parseInt(jobID); // keep only jobs with different index than the one to be removed
    });

    this.setState(
      {
        ...this.state,
        jobs: filteredJobs
      },
      () => {
        this.props.updateInputState(this.state);
      }
    );
  }

  render() {
    const handleInputChange = this.handleInputChange;

    const experienceElements = this.state.jobs.map((job, index) => {
      return (
        <fieldset key={index} data-jobid={index}>
          <label htmlFor="position">Position</label>
          <input
            onChange={handleInputChange}
            type="text"
            id="position"
            value={job.position}
          ></input>

          <label htmlFor="company">Company</label>
          <input onChange={handleInputChange} type="text" id="company" value={job.company}></input>

          <label htmlFor="experinceFrom">From</label>
          <input
            onChange={handleInputChange}
            type="text"
            id="experinceFrom"
            value={job.experinceFrom}
          ></input>

          <label htmlFor="experinceTo">To</label>
          <input
            onChange={handleInputChange}
            type="text"
            id="experinceTo"
            value={job.experinceTo}
          ></input>

          <button
            className="delete"
            onClick={(event) => {
              event.preventDefault();
              const buttonElement = event.target as HTMLButtonElement;
              const jobElement = buttonElement.parentNode as HTMLFieldSetElement;
              const jobID = jobElement.dataset.eduid;

              this.removeJob(jobID);
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
            this.addJob();
          }}
          className="add"
        >
          Add
        </button>
      </fieldset>
    );
  }
}

export default Experience;
