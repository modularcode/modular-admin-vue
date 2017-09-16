<template>
  <div
    id="App"
    class="
      App
    " >

    <div class="HeaderContainer">
      <AppHeader />
    </div>
    <div class="SidebarContainer">
      <!-- {{> App/_common/Sidebar/Sidebar}} -->
    </div>
    <div class="SidebarOverlay" id="SidebarOverlay"></div>
    <div class="ContentContainer">
      <div class="ContentBackground"></div>
      <div class="Content">

      </div>
    </div>

    <div class="FooterContainer" >
      <!-- {{> App/_common/Footer/Footer}} -->
    </div>

    <!-- {{> App/_common/Search/Search}} -->

  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" src="./App.scss"></style>

<script>
  import AppHeader from './_common/AppHeader/AppHeader';

  export default {
    components: {
      AppHeader,
    },
  };
</script>
