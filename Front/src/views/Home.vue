<template>
    <div>
        <cabeza></cabeza>
        <cuerpo></cuerpo>
        <pie></pie>
    </div>
</template>

<script>
import cabeza from '../componets/HeaderLogout';
import cuerpo from '../componets/BodyHome';
import pie    from '../componets/FooterHome';


export default {
    components:{cabeza, cuerpo, pie},
}
</script>