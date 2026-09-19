import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
    base: '/',
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                privacy: resolve(__dirname, 'privacy.html'),
                terms: resolve(__dirname, 'terms.html'),
                support: resolve(__dirname, 'support.html'),
                brand: resolve(__dirname, 'brand.html'),
                zombie: resolve(__dirname, 'zombie-defense.html'),
                manualRiceSorting: resolve(__dirname, 'manual-rice-sorting.html'),
                taikyokuBattleline: resolve(__dirname, 'taikyoku-battleline.html'),
                manifestationRecordWar: resolve(__dirname, 'manifestation-record-war.html'),
            },
        },
    },
})
