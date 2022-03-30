import { Button, Input } from "@components/SearchForm/styles";
import React from "react";
import { useHistory } from "react-router-dom";

interface Props {
  onSubmit: React.FormEventHandler<HTMLFormElement>;
  onChangeUrl: React.ChangeEventHandler<HTMLInputElement>;
  url: string;
}

const SearchForm = ({ onSubmit, onChangeUrl, url }: Props) => {
  const history = useHistory();

  return (
    <form onSubmit={onSubmit}>
      <Input
        type="search"
        name="q"
        onChange={onChangeUrl}
        value={url}
        placeholder="Paste Youtube link here"
        autoComplete="off"
      />
      <Button type="submit" disabled={!url || !url.trim()}>
        Convert
      </Button>
    </form>
  );
};

export default SearchForm;
