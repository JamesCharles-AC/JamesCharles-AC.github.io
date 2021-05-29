const vueApp = {

    data() {

        return{

            links: [
                { title: "Home", value: 0, disabled: false },
                { title: "About me", value: 1, disabled: false },
                { title: "Skills", value: 2, disabled: false },
                { title: "Projects", value: 3, disabled: false },
            ],

            iconIndex: 0,

            icons: [
                'fa-home',
                'fa-user',
                'fa-layer-group'
            ],

            // Active or deactivate home
            section: "Home",

            content: {
                home:{
                    title:  "Welcome to my resume!",
                    text1:  "This site is open to anyone looking for some information about me." + "\n" +
                            "It could also be that you ended up here by accident, but take a look and maybe you will be interested in me <b>(in a professional way, of course)</b>.",
                    section1Title: "Know my skills",
                    section1Text: "Here you will find which technologies I am in, which ones I have basic knowledge on and which ones make me curious to learn.",
                    section2Title: "Visit my Github page",
                    section2Text: "and find in which projects I'm working on! (maybe none right now, at the moment).",
                },
                about:{
                    title1:  "A little about me",
                    title2:  "Education",
                    title3:  "Experience",
                    personal:  "Wanting to work in this virtual world that is the internet begins with being a videogames player. " +
                            "Videogames have always caught my attention and I wanted to enter the world of programming because of them." + "\n\n" +
                            "Right now I am studying <b>web development</b>, identifying myself as a full-stack developer. " + 
                            "Javascript is my <b>main stack</b>, but I also have knowledge of other languages ​​and I would like to continue learning different technologies" + "\n\n" +
                            "My intention is to <b>continue learning as much as I can</b>, whether in a work environment, study or combining both. " +
                            "I consider myself an organized person, self-taught and with whom it is easy to work so, if you are <b>looking for someone for your team</b>, here I leave my contact information:",
                    
                    section1Title: "Know my skills",
                    section1Text: "Here you will find which technologies I am in, which ones I have basic knowledge on and which ones make me curious to learn.",
                    section2Title: "Hobbies",
                    section2Text: "<ul class='p-3 mb-0'><li class='py-1'>Playing the guitar</li><li class='py-1'>Videogames</li><li class='py-1'>I love listening to music</li><li class='py-1'>To have ideas that I never develop</li></ul>",
                },
            },

            personalInformation: [
                true, false, false
            ],

            education:[
                { place: "IES La Sénia, Paiporta (Spain)", title: "Certificate of Higher Education (HNC)", type: "Software and Web development", date: "2019 - 2021" },
                { place: "IES La Sénia, Paiporta (Spain)", title: "Vocational Education and Training (VET)", type: "IT & Computer Skills", date: "2018 - 2019" }
            ],

            experience:[
                { place: "Ardis Software", title: "Training period", type: "Web & Angular developer", date: "Jan. - Jun. 2021" },
                { place: "EMO - Especialistas en ortopedia", title: "Training period", type: "IT & PHP Programmer", date: "Mar. - Jun. 2019" }
            ],

            buttons:{
                tellMeMore: "Tell me more!",
                bringMeThere: "Bring me there!",
                takeALook: "Let's take a look",
                about: "About me",
                experience: "Education / Experience",
                contact: "Contact",
                contactMe: "Contact info"
            },

            // Decorative section separators (filled in 'mounted' hook)
            separators: [],

            // Active or deactivate sections
            aboutSection: true,

            // Links of info in about section
            aboutLinks: [
                {title: "Biography", active: true},
                {title: "Languages", active: false},
                {title: "Skills", active: false},
            ],

            // List of languages and level in about section
            languages: [
                {lang: "English", points: 4},
                {lang: "Spanish", points: 5},
                {lang: "Catalan", points: 3},
            ],

            // List of skills with images and name
            skills: [
                {src: "./assets/icons/js-icon.png", text: "JavaScript"},
                {src: "./assets/icons/php-icon.png", text: "PHP"},
                {src: "./assets/icons/java-icon.png", text: "Java"},
                {src: "./assets/icons/vue-icon.png", text: "Vue.js"},
                {src: "./assets/icons/node-icon.png", text: "Node.js"},
                {src: "./assets/icons/angular-icon.png", text: "Angular"},
                {src: "./assets/icons/docker-icon.png", text: "Docker"},
                {src: "./assets/icons/vm-icon.png", text: "Virtual Box"},
            ],

            projectsSection : false,
        }
    },
    methods:{

        // Ahow a section or another
        setSection( value ){

            switch (value) {

                case 0:
                    this.section = "Home";
                    break;

                case 1:
                    this.section = "About me";
                    break;
                    
                case 2:
                    this.section = "Skills";
                    break;
                    
                case 3:
                    this.section = "Projects";
                    break;
            }

            this.icons.forEach(icon => {
                console.log( icon );
                document.getElementById("header-icon").classList.remove( icon )
            })
            
            document.getElementById("header-icon").classList.add( this.icons[ value ] )
            
        },

        showPersonalInfo( index ){

            this.personalInformation.fill(false)
            this.personalInformation[ index ] = true;
            switch (index) {
                case 0:
                    this.content.about.title = "A little about me"
                    break;
                    
                case 1:
                    this.content.about.title = "Education"
                    break;
                    
                case 2:
                    this.content.about.title = "Experience"
                    break;
            }

            console.log( this.personalInformation );
        },

        copyText( event ){

            console.log( event.target.innerText );
            var copyText = event.target;

            /* Select the text field */
            copyText.select();
            copyText.setSelectionRange(0, 99999); /* For mobile devices */

            /* Copy the text inside the text field */
            document.execCommand("copy", false, text );
        },

    },
    mounted(){

        // Get separators from sections
        this.separators = document.getElementsByClassName("separator");

        // On first load, wait to show home texts
        setTimeout( () =>{
            // this.homeSection = true;
        }, 50);

        console.log( window );
    },
};

Vue.createApp(vueApp).mount('#app');