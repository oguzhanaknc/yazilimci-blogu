import React from "react";
import { BrowserView } from "react-device-detect";
const Mytable = ({ repos }) => (
  <BrowserView>
    <div>
      <div className="card-wrapper">
        <div className="card">
          <div className="card-content">
            <span className="card-title">En son Github Repolarım 👩🏻‍💻</span>
            <table className="centered">
              <tbody>
                {repos.map(repo => (
                  <a key={repo.id} href={repo.svn_url}>
                    <tr>
                      <a>
                        <td className="repo-text">
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
          margin-left: 70vw;
          margin-top: 40vw;
          height: 20px;
          text-align: center;
        }
        .repo-text {
          color: #00838f;
        }
      `}</style>
    </div>
  </BrowserView>
);

export default Mytable;
