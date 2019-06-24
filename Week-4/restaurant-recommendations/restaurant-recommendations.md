## Introduction

In this challenge, you will build a single-page app, similar to Yelp, for
reviewing restaurants. When complete, a user can click on a restaurant and see it highlighted in blue. Selecting that restaurant also displays the associated reviews. In addition, users can submit a new review via form displayed below the reviews list.

## Getting Started

```no-highlight
$ et get restaurant-recommendations
$ cd restaurant-recommendations
$ yarn install
$ yarn run start
```

## Things to Know

Take a look at the way we've separated the types of components.  A **container** is usually a component that is not responsible for directly rendering any presentational elements (`<li>`s, `<p>`s, etc). A container holds the logic which governs the smaller components.  Another way of distinguishing a `container` from a `component` is that a `container` usually has state: it is a "smart" component.  It is aware of the condition of the presentational components.  "Dumb" components, on the other hand, typically have no state.  They receive what they need from a parent component, and return what they need to return.  

## Instructions

![Restaurant Recommendations App](https://s3.amazonaws.com/horizon-production/images/restaurant-recommendations.png)

We have provided you a web application with a two-column layout, which you can find at <http://localhost:8080>. The column on the left contains a list of Restaurants and displays their title, location, and a small picture. Only one restaurant in this column can be selected at a time.

The column on the right displays the reviews for the selected restaurant.

We've also given you a variety of components, some with complete code, others which are empty. You'll notice that `App.js` lives in a _containers_ folder, while the others live in a _components_ folder.  

For this assignment, structure your app like so:
* Logic for the `New Review` form should be held in a `ReviewFormContainer`. If you choose, you could also have a container for your lists.
* `App.js` should hold the logic for the two `FormContainer`s, as well as the lists of restaurants and reviews.

### Part One

Build a form so that people can add a review. The form should prompt the user
for the following information:

* Name
* Rating (one to five stars)
* The text content of their review of the restaurant

**Hints**
* We will need a hidden field for the `restaurant_id`, so we can keep track of which restaurant the newly added review is tied to.
* Display the form at the bottom of the reviews for the selected restaurant. You do not need to validate your form inputs.

### Part Two

* Handle the form submission by saving the restaurant review in the **state** of the application.
* If you have built your React single-page application correctly, a change in state should signal a page update, and you will see the new review in your application.

### Part Three (optional)

Users shouldn't be constrained to this small list of restaurants!
* Add a second form to allow users to add restaurants to the list.
* Logic for the `Restaurant` form should each be held in a `RestaurantFormContainer`
* As with the reviews form, the data should be saved to your App's state so the new additions are immediately rendered on the page.

You never know when your site could come under attack by malicious users.
* Add code to validate your inputs to help protect your site.
