<script lang="ts">
    export let icon_path: string;
    export let value: any;
    export let label: string;
</script>

<article>
    <div class="grid">
        <img src={icon_path} alt="Vel">
        <div class="container">
            <p>{value}</p>
            <span>{label}</span>
        </div>
    </div>

</article>

<style>
    article { border: thin solid var(--primary); }
    .grid { align-items: center; }
    article > div > img { filter: invert(0.8); }
    article > div > div > p { font-size: 40px; }
    article > div > div > span { font-size: smaller; }
    /* article:hover { filter: brightness(120%);  } */
</style>
