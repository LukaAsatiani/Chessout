<template>
    <header class="masthead bg-primary">
        <div class="inner">
            <nav class="navbar navbar-expand-md navbar-light bg-white shadow-sm">
                <div class="container">
                    <a class="navbar-brand" href="/">
                        <h3>ChessOut</h3>
                    </a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav ml-auto">
                            <li v-for="link in links" :key="link.title" class="nav-item active">
                                <router-link class="nav-link" :to="link.href">{{link.title}}</router-link>
                            </li> 
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    </header>   
</template>

<script>
    export default {
        data(){
            return {
                links: [
                    {
                        title: "Home",
                        href: "/",
                    },
                    {
                        title: "Profile",
                        href: "/profile",
                    }
                ]
            }
        }
    }
</script>

<style scoped>

</style>