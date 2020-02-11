import { firebase } from "../components/firebase";
import { database } from "firebase";

let f = "_n";
export async function getBlogs() {
  let posts = [];
  await firebase
    .database()
    .ref("/blogs/")
    .once("value")
    .then(function(snapshot) {
      snapshot.val().map(x => {
        x.content = x.content.split(f).join("\n");
        posts.push(x);
      });
    });
  return posts;
}

export async function getStatus(params) {
  let status;
  await firebase
    .database()
    .ref("/Me/")
    .once("value")
    .then(function(snapshot) {
      status = snapshot.val();
    });

  return status;
}

export async function getBlog(postid) {
  let blog;
  await firebase
    .database()
    .ref("/blogs/")
    .once("value")
    .then(function(snapshot) {
      snapshot.val().map(x => {
        if (x.slug == postid) {
          x.content = x.content.split(f).join("\n");
          blog = x;
        }
      });
    });

  return blog;
}

export async function getComments(postid) {
  let mineComments = [];
  let count = 0;
  await firebase
    .database()
    .ref("/comments/")
    .once("value")
    .then(function(snapshot) {
      if (snapshot.val()) {
        count += snapshot.val().length - 1;
        for (let i = 0; i <= Object.keys(snapshot.val()).length + 10; i++) {
          if (snapshot.val()[i] && snapshot.val()[i].slug == postid) {
            mineComments.push(snapshot.val()[i]);
          }
        }
      }
    });

  return { comments: mineComments, count: count };
}

export async function getDrafts(params) {
  let snap;
  let id;
  await firebase
    .database()
    .ref("/drafts/")
    .limitToLast(1)
    .once("value")
    .then(function(snapshot) {
      id = snapshot.node_.children_.root_.key;
      snap = snapshot.val();
    });
  return { snap: snap, id: id };
}

export async function setStatus(status, detail) {
  await firebase
    .database()
    .ref("Me/")
    .set({
      status: status,
      detail: detail
    });
  return true;
}

export async function setDetail(detail, status) {
  await firebase
    .database()
    .ref("Me/")
    .set({
      status: status,
      detail: detail
    });
  return true;
}

export async function setDraft(state) {
  let d = new Date();
  await firebase
    .database()
    .ref("drafts/" + (parseInt(localStorage.getItem("c")) + parseInt(1)))
    .set({
      title: state.title,
      content: state.content,
      slug: state.slug,
      image: state.image,
      date:
        toString(d.getDay()) + "/" + (d.getMonth() + 1) + "/" + d.getFullYear()
    });
  return true;
}

export async function setPost(state) {
  let d = new Date();
  await firebase
    .database()
    .ref("blogs/" + (parseInt(localStorage.getItem("c")) + parseInt(1)))
    .set({
      title: state.title,
      content: state.content,
      slug: state.slug,
      image: state.image,
      date: d.getDay() + "/" + (d.getMonth() + 1) + "/" + d.getFullYear()
    });
  return true;
}

export async function deleteComment(comment) {
  await firebase
    .database()
    .ref("/comments/")
    .once("value")
    .then(function(snapshot) {
      if (snapshot.val()) {
        for (let i = 0; i <= Object.keys(snapshot.val() + 1).length; i++) {
          if (
            snapshot.val()[i] &&
            snapshot.val()[i].author == comment.author &&
            snapshot.val()[i].comment == comment.comment
          ) {
            database()
              .ref("comments/" + i)
              .remove();
            window.location.reload();
          }
        }
      }
    });
}

export async function setCommet(state, id, slug) {
  id => (id ? id : 0);
  await firebase
    .database()
    .ref("comments/" + parseInt(parseInt(id) + parseInt(1)))
    .set({
      author: state.author,
      comment: state.comment,
      slug: slug
    })
    .then(() => {
      window.location.reload();
    });
}
