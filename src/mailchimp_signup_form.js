import React, { Component } from 'react';
/*
 * #mc_embed_signup{background:#fff; clear:left; font:14px Helvetica,Arial,sans-serif; width:100%;}
 */
/* Add your own Mailchimp form style overrides in your site stylesheet or in this style block.
We recommend moving this block and the preceding CSS link to the HEAD of your HTML file. */
class MailchimpSignupForm extends Component {
  render() {
    return (
      <div className={'container mailchimp-signup-form ' + this.props.className}>
        <div id="mc_embed_signup " className={'row ' + (this.props.backgrounded ? 'has-background' : '')}>
          <form action=
          "https://nyclimatescience.us19.list-manage.com/subscribe/post?u=4093691f5492e9c565654cd07&amp;id=94a51c0ed5"
          method="post" id="mc-embedded-subscribe-form" name=
          "mc-embedded-subscribe-form" className="validate" target="_blank"
          noValidate="">
            <div id="mc_embed_signup_scroll">
              <h6> Subscribe to our newsletter</h6>
              <input type="email" name="EMAIL" className="email"
               id="mce-EMAIL" placeholder="Email address" required=""/>
              <div style={{position: 'absolute',  left: '-5000px'}}
               aria-hidden="true">
                <input type="text" name=
                "b_4093691f5492e9c565654cd07_94a51c0ed5" tabIndex="-1"
                value=""/>
              </div>
              <input type="submit" value="Subscribe" name="subscribe"
               id="mc-embedded-subscribe" className="btn btn-primary button"/>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default MailchimpSignupForm;
