// Methods related to links

import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { Links } from './links.js';

Meteor.methods({
  'links.toggleDisabled': async function(linkId) {
    check(linkId, String);

    console.log("AM I RUNNING?");

    const link = await Links.findOneAsync(linkId);
    if (!link) {
      throw new Meteor.Error('link-not-found', 'Link not found');
    }
    
    const linkDisabled = link.disabled;
    console.log("linkDisabled:", linkDisabled);


    /* if(Meteor.isServer) {
      console.log("SERVER ONLY CODE");

      // Simulate a delay for demonstration purposes
      await new Promise(resolve => setTimeout(resolve, 2000));

      //throw new Meteor.Error('simulated-error', 'This is a simulated error for testing purposes');
    } */

    //  Toggle the disabled state of all links
    return await Links.updateAsync(
      {_id: linkId},
      {$set: {disabled: !linkDisabled}}
    );
  },

  'links.insert': async function(title, url) {
    check(url, String);
    check(title, String);

    return await Links.insertAsync({
      url,
      title,
      createdAt: new Date(),
      disabled: false
    });
  },
});
