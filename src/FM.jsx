import React from 'react';
import POP from '../src/POP.jpg';

const FilmHubInfo = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-8 offset-md-2">
          <h2 className="text-center mb-4">Welcome to Film Hub</h2>
          <div className="text-center mb-4">
            <a href="https://www.youtube.com/watch?v=mCdA4bJAGGk">
              {/* <img src="/POP.jpg" alt="SEE MORE!" className="img-fluid" /> */}
                <img src={POP} alt="POP" className="container" />
            </a>
          </div>
          <p>
            Film Hub is your ultimate destination to discover and watch the latest movie trailers.
            Whether you're looking for the next action-packed blockbuster, a hilarious comedy, gripping drama,
            or any other genre, you'll find a wide selection of trailers here to keep you up to date with
            the latest in the world of cinema.
          </p>
          <p>
            With an intuitive and user-friendly interface, Film Hub allows you to explore trailers by genre,
            release year, or simply discover what's trending. Additionally, you can create customized playlists
            to save your favorite trailers and share them with friends and family.
          </p>
          <p>
            Join our community of movie enthusiasts and start exploring the exciting world of movie trailers on
            Film Hub today!
          </p>
        </div>
      </div>
    </div>
  );
}

export default FilmHubInfo;
