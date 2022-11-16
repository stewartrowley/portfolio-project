<script setup lang="ts">
import type { Engine } from 'tsparticles-engine';
import { loadSnowPreset } from 'tsparticles-preset-snow';

const particlesOptions = {
  background: {
    color: {
      value: '#131834'
    }
  },
  fpsLimit: 60,
  particles: {
    // shape: {
    //   type: ''
    // },
    move: {
      speed: -3
    }
  },
  preset: 'snow'
};

async function particlesInit(engine: Engine): Promise<void> {
  await loadSnowPreset(engine);
}
</script>

<template lang="">
  <div>
    <Particles id="tsparticles" :particlesInit="particlesInit" :options="particlesOptions" />
  </div>
</template>
<style lang="scss">
#tsparticles {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  padding: 0;
  margin: 0;
  z-index: 0; /* if you use -1 you have to set to `"window"` the interactivity.detectsOn property */
}
</style>
