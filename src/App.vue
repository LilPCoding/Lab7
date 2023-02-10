<script>
import Announce from './components/pages/Announce.vue'
import Subjects from './components/pages/Subjects.vue'
import AddDrop_Subjects from './components/pages/AddDrop_Subjects.vue'

const routes = {
  '/Announce' : Announce,
  '/Subjects' : Subjects,
  '/AddDrop_Subjects' : AddDrop_Subjects,
}

export default {
  data() {
    return {
      currentPath: window.location.hash
    }
  },
  computed: {
    currentView() {
      return routes[this.currentPath.slice(1) || '/'] || NotFound
    }
  },
  mounted() {
    window.addEventListener('hashchange', () => {
		  this.currentPath = window.location.hash
		})
  }
}
</script>

<template>
  <!-- <a href="#/non-existent-path">Broken Link</a> -->
  <!-- <component :is="currentView" /> -->
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;200;300;400;500;700;900&display=swap">

  <!-- Header -->
    <nav class="navbar navbar-expand-lg navbar-light shadow">
        <div class="container d-flex justify-content-between align-items-center">

            <a class="navbar-brand text-success logo h1 align-self-center" href="https://www.mju.ac.th/en/" target="_blank">
                MJU
            </a>

            <button class="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#templatemo_main_nav" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="align-self-center collapse navbar-collapse flex-fill  d-lg-flex justify-content-lg-between" id="templatemo_main_nav">
                <div class="flex-fill">
                    <ul class="nav navbar-nav d-flex justify-content-between mx-lg-auto">
                        <li class="nav-item">
                            <a class="nav-link" href="#/Announce">Announce</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#/Subjects">Subjects</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#/AddDrop_Subjects">Add-Drop</a>
                        </li>
                    </ul>
                </div>
                
            </div>

        </div>
    </nav>
    <!-- Close Header -->

    <!-- <a href="#/non-existent-path">Broken Link</a> -->
    <component :is="currentView" />
    
</template>