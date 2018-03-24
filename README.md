# international-react

## What we will cover

* What do we need to consider when we have an app for many customers?
* What happens when a customer asks for custom features?
* What can we do to separate features from our builds?

## Notes

When dealing with international applications or applications that will
be a little different for each customer it is vital that you have
a good strategy for feature toggling.

The most common way this is done is by using `if conditions` in the code
to toggle different components on and off at runtime.

The issue with this is that it gets very messy when you have a lot of
custom components and you have to be very clever with loading the correct
components so customers only get what they really need.

It is also tricky to separate features so one customer can't use
features for another customer.
