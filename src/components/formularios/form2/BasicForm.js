import React from "react";
import InputField from "../form2/InputField";

export const BasicForm = ({
  handleChange,
  handleSubmit,
  isSubmitting,
  resetForm,
  values,
  errors,
  touched
}) => (
  <form onSubmit={handleSubmit}>
    <div className="colums">
      <div className="column is-full">
        <div className="field">
          <label className="label">Team</label>
          <div className="control">
            <input
              name="team"
              className="input"
              onChange={handleChange}
              value={values.team}
            />
          </div>
          {touched.team && errors.team && (
            <p className="help is-danger">{errors.team}</p>
          )}
        </div>
      </div>
      <div className="column is-full">
        <InputField name="name" type="text" label="Player Name" />
      </div>
      <div className="column is-full">
        <InputField name="lastName" type="text" label="Player Last Name" />
      </div>
      <div className="column is-full">
        <InputField name="number" type="text" label="Number" />
      </div>
      <div className="column is-full">
        <div className="field">
          <label className="label">Position</label>
          <div className="control">
            <div className="select is-rounded">
              <select
                id="position"
                name="position"
                onChange={handleChange}
                value={values.position}
              >
                <option value="pg">Point Guard</option>
                <option value="sg">Shooting Guard</option>
                <option value="sf">Small Forward</option>
                <option value="pf">Power Forward</option>
                <option value="c">Center</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <div className="is-full">
        <div className="field is-grouped is-grouped-centered">
          <p className="control">
            <button
              className="button is-rounded is-primary"
              disabled={isSubmitting}
              type="submit"
            >
              Submit
            </button>
          </p>
          <p className="control">
            <button
              className="button is-rounded is-danger"
              type="button"
              onClick={resetForm}
            >
              Reset
            </button>
          </p>
        </div>
      </div>
    </div>
  </form>
);
