<template>
    <div>
        <h1>Foto desde componente: {{ $route.params.id }}</h1>
        <!-- el parametro que pasamos por params es el mismo que definimos
        en la ruta -->
    </div>
</template>
<script>
export default {
    name : 'Foto'
}
</script>