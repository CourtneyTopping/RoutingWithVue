export default {
    template: `
    <section> 
    <h1>Welcome to my Super Awesome App!</h1>
    <button @click="registerUser">Register for awesome swag!</button>
    </section>
    `,
    // anything going on page has to be wrapped in section tag

data: function() {
    return {
        message: "Welcome to my super awesome app!"
    }
},

    methods: {
        registerUser() {
            console.log('clicked register button');
        }
    }
    }
    