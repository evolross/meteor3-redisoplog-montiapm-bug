import { Links } from '/imports/api/links/links.js';
import { Meteor } from 'meteor/meteor';
import './info.html';

Template.info.onCreated(function () {
  Meteor.subscribe('links.all');
});

Template.info.helpers({
  links() {
    return Links.find({});
  },
  disabledClass() {
    console.log("this.disabled:", this.disabled);
    return this.disabled ? 'disabled' : '';
  }
});

Template.info.events({
  'click .toggle-disabled': async function(event){
    event.preventDefault();

    const linkId = this._id;

    try {
      await Meteor.callAsync('links.toggleDisabled', linkId);
    } catch (error) {
      console.error('Error toggling link visibility:', error);
    }
  },
  'submit .info-link-add': async function(event) {
    event.preventDefault();

    const target = event.target;
    const title = target.title;
    const url = target.url;

    try {
      await Meteor.callAsync('links.insert', title.value, url.value);
      title.value = '';
      url.value = '';
    } catch (error) {
      alert(error.error);
    }
  },
});
