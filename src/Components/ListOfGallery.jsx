import React from "react";
import Moment from "react-moment";

const ListOfGallery = ({
  id,
  created_at,
  updated_at,
  description,
  likes,
  links,
  urls,
  user,
}) => {
  return (
    <main>
      <figure>
        <img src={urls.thumb} alt={user.name} />
      </figure>
      <div className="Block">
        <aside>
          <span className="iconBlock">
            <span>
              <i class="far fa-user"></i>
            </span>
            <span>{user.name}</span>
          </span>
        </aside>
        <aside>
          <span className="iconBlock">
            <span>
              <i class="fab fa-gratipay"></i>
            </span>
            <span>{likes}</span>
          </span>
        </aside>
      </div>
      <div className="contentDes">
        <img src={user.profile_image.small} alt={user.name} />

        <p>
          Created at :
          <Moment fromNow>{created_at}</Moment>
        </p>
      </div>
      <footer>
              <p>{description === null ? "" : description}</p>
              <p>
                  <a href={links.download} target="_blank" rel="noreferrer">Download</a>
              </p>
      </footer>
    </main>
  );
};

export default ListOfGallery;
