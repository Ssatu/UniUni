import React, { useState } from "react";
import styles from "./Global.module.css";

function AddingTags() {
  /* let headers = document.getElementsByClassName("accordion");
  console.log(headers);
  for (let i = 0; i < headers.length; i++) {
    headers[i].addEventListener("click", function () {
      this.classList.toggle("active");

      let header = this.nextElementSibling;
      if (header.style.display === "block") {
        header.style.display = "none";
      } else {
        header.style.display = "block";
      }
    });
  } */
  const [modal, setModal] = useState(false);
  const toggleModal = () => {
    setModal(!modal);
  };

  let courses = [];
  let occupations = [];

  function addCourse(cour) {
    if (courses.includes(cour)) {
      courses.splice(courses.indexOf(cour), 1);
    } else {
      courses.push(cour);
    }
    console.log(courses);
  }

  function addOccupation(occ) {
    if (occupations.includes(occ)) {
      occupations.splice(occupations.indexOf(occ), 1);
    } else {
      occupations.push(occ);
    }
    console.log(occupations);
  }

  const Courses = ["Healthcare", "Engineering", "Business", "Computing"];
  const Occupations = ["Junior College", "Polytechnic", "Served NS", "Working"];
  return (
    <>
      {!modal && (
        <button onClick={toggleModal} className={styles.searchButton}>
          Tags
        </button>
      )}

      {modal && (
        <>
          <div onClick={toggleModal} className={styles.overlay}></div>
          <div className={styles.tagsTable}>
            <button className={styles.accordion}>Courses:</button>

            <div className={styles.tagsList}>
              {Courses.map((i) => (
                <>
                  <input
                    type="checkbox"
                    className={styles.checkbox}
                    id={i}
                    onChange={() => addCourse(i)}
                  />
                  <label className={styles.tagsLabel} htmlFor={i}>
                    {i}
                  </label>
                </>
              ))}
            </div>
            <button className={styles.accordion}>Occupation:</button>

            <div className={styles.tagsList}>
              {Occupations.map((i) => (
                <>
                  <input
                    type="checkbox"
                    className={styles.checkbox}
                    id={i}
                    onClick={() => addOccupation(i)}
                  />
                  <label className={styles.tagsLabel} htmlFor={i}>
                    {i}
                  </label>
                </>
              ))}
            </div>
            <button className={styles.searchButton} onClick={toggleModal}>
              Confirm tags
            </button>
          </div>
          <br />
        </>
      )}
    </>
  );
}

export default AddingTags;
