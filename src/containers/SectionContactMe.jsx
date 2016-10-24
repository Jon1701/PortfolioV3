// React.
import React from 'react';

// Component definition.
export default class SectionContactMe extends React.Component {

  // Component render.
  render() {
    return (
      <div id="section-contactme" className="section height-min-100vh text-center">

        <h1 className="text-center text-uppercase">Contact Me</h1>

        <div className="row">

          <div className="col-xs-12 col-sm-12 col-md-10 col-md-offset-1 col-lg-6 col-lg-offset-3">

            <div className="form-field">
              <input type="text" placeholder="Name" name="name"/>
            </div>

            <div className="form-field">
              <input type="text" placeholder="Email" name="email"/>
            </div>

            <div className="form-field">
              <input type="text" placeholder="Subject" name="_subject"/>
            </div>

            <div className="form-field">
              <input type="text" name="_gotcha" placeholder="Gotcha"/>
            </div>

            <div className="form-field">
              <textarea name="message" placeholder="Message"></textarea>
            </div>

            <div className="form-submit-container">
              <button type="submit">
                <span className="icon icon-paperplane"/> Send Message
              </button>
            </div>

          </div>

        </div>

      </div>
    )
  } // End Component render.

}
