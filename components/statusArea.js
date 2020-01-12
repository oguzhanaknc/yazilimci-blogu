import React from "react";

async setStatus(e) {
    await firebase
      .database()
      .ref("Me/")
      .set({
        status: e.target.value
      })
      .then(this.setState({ status: e.target.value }));
  }


const status = props => (
    
  <div>
    <div>
      <h6>Durum Bilgisi</h6>

      <input
        placeholder={this.state.status}
        onChange={e => {
          this.setStatus(e);
        }}
      ></input>
    </div>
    <style jsx>{``}</style>
  </div>
);

export default status;
