<template>
  <sui-segment inverted vertical class="footer">
    <sui-container text-align="center">
      <sui-grid class="inverted" stackable divided>
        <sui-grid-column :width="10" textAlign="center">
          <h4 is="sui-header" content="Webb Trade Center" class="inverted" />
            <p class="">
              Trading minerals has never been easier!
            </p>
            <p>
              Copyright © MartinBorg.me 2019.
            </p>
        </sui-grid-column>
      </sui-grid>

      <sui-divider inverted section />

      <sui-list
        horizontal
        divided
        link
        class="inverted">

        <a is="sui-list-item" href="#">Site Map</a>
        <a is="sui-list-item" href="#">Contact Us</a>
        <a is="sui-list-item" href="#">Terms and Conditions</a>
        <a is="sui-list-item" href="#">Privacy Policy</a>
      </sui-list>
    </sui-container>
  </sui-segment>  
</template>

