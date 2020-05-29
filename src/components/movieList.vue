<template>

  <div class="card border-dark mb-3" style="max-width: 18rem;">
    <div class="card-header">{{movie.id}}</div>
    <div class="card-body text-dark">
      <h5 class="card-title">{{movie.title}}</h5>
        <p class="card-text">{{movie.descripcion}}</p>
      </div>
    </div>

</template>

<script>
export default {
  name: 'movieList',
  props: {
    movie: {
      type: Object,
      required: true,
    }
  }
}
</script>
