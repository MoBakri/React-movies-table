import React from "react";

const Listgroup = (props) => {
  const { genres, onGenres, nameGenre, idGenre, genreSelected } = props;
  return (
    <ul className="list-group ">
      {genres.map((item) => (
        <li
          className={
            item === genreSelected ||
            (item.name === "All Genre" && genreSelected === undefined)
              ? "list-group-item active"
              : "list-group-item"
          }
          key={item[idGenre] || item[nameGenre]}
          style={{ cursor: "pointer", textAlign: "center" }}
          onClick={() => onGenres(item)}
        >
          {item[nameGenre]}
        </li>
      ))}
    </ul>
  );
};
Listgroup.defaultProps = {
  nameGenre: "name",
  idGenre: "_id",
};
export default Listgroup;
