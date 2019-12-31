import React from "react";

import fetch from "isomorphic-unfetch";
const Mytable = ({ repos }) => (
  <div>
    <div className='card-wrapper'>
      <div class='card'>
        <div class='card-content'>
          <span class='card-title'>En son Github Repolarım 👩🏻‍💻</span>
          <table className='centered'>
            <tbody>
              {repos.map(repo => (
                <a href={repo.svn_url}>
                  <tr>
                    <a>
                      <td className='repo-text'>
                        {repo.name} {repo.language}
                      </td>
                    </a>
                  </tr>
                </a>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <style jsx>{`
      .card-wrapper {
        max-width: 260px;
        margin-left: 70%;
        margin-top: 32%;
        height: 20px;
        text-align: center;
      }
      .repo-text {
        color: #00838f;
      }
    `}</style>
  </div>
);

export default Mytable;
