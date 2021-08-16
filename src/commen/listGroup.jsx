import React from "react";

const Listgroup = (props) => {
  const { genres, onGenres, nameGenre, idGenre, genreItem } = props;
  return (
    <ul className="list-group ">
      {genres.map((item) => (
        <li
          className={
            item[idGenre] === genreItem
              ? "list-group-item active"
              : "list-group-item"
          }
          style={{ cursor: "pointer", textAlign: "center" }}
          onClick={() => onGenres(item)}
          key={item[idGenre]}
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
