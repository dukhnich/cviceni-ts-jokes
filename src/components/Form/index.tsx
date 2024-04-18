/* eslint-disable react/prop-types */
import { useState } from "react";
import "./style.scss";
import { JokeTypes, FormData } from "../../model";

const TYPES: JokeTypes[] = ["general", "dad", "knock-knock", "programming"];

interface FormProps {
  onSubmitData: (data: FormData) => void;
}

export const Form: React.FC<FormProps> = ({ onSubmitData }) => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    type: "general",
    count: 0,
  });

  const options: number[] = [];
  for (let i = 0; i < 10; i++) {
    options.push(i + 1);
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    onSubmitData(formData);
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <label className="form__label">
        Your name
        <input
          className="form__input"
          name="name"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setFormData({ ...formData, name: e.target.value })
          }
          required
        />
      </label>

      <label className="form__label">
        Select type of Jokes
        <select
          className="form__input"
          name="name"
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
            setFormData({ ...formData, type: e.target.value as JokeTypes })
          }
          required
          value={formData.type}
        >
          <option value="">Select one</option>
          {TYPES.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      </label>

      <label className="form__label">
        Select count of Jokes
        <select
          className="form__input"
          name="name"
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
            setFormData({ ...formData, count: Number(e.target.value) })
          }
          required
        >
          <option value="">Select one</option>
          {options.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      </label>

      <button className="form__button" type="submit">
        Submit
      </button>
    </form>
  );
};
