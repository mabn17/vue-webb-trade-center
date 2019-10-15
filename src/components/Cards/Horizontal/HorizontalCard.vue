<template>
  <div>
    <div v-if="current.name">
      <b-row>
        <slot></slot>
      </b-row>
      <b-row>
        <b-card no-body class="overflow-hidden" style="max-width: 540px;" id="card-about">
          <b-row no-gutters>
            <b-col md="9">
              <b-card-body title="Descirption">
                <b-card-text>
                  {{ current.description || '' }}
                </b-card-text>
              </b-card-body>
            </b-col>
          </b-row>
        </b-card>
      </b-row>
    </div>
    <h3 v-else>Loading ...</h3>
  </div>
</template>
<script>
export default {
  name: 'HorizontalCard',

  props: {
    current: {
      type: [Object, Array],
      default: () => {},
    }
  },
}
</script>
<style>
#card-about { background-color: #eee !important; }
</style>
