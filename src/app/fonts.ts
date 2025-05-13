import localFont from 'next/font/local'

// Optimize font loading to improve performance
// Only include the most commonly used weights to reduce initial loading time
export const Helvetica_Neue = localFont({
    src: [
        // Core font weights that are most commonly used
        {
            path: './fonts/helveticaneueroman-webfont.woff2',
            weight: '400',
            style: 'normal',
        },
        {
            path: './fonts/helveticaneueitalic-webfont.woff2',
            weight: '400',
            style: 'italic',
        },
        {
            path: './fonts/helveticaneuebold-webfont.woff2', 
            weight: '700',
            style: 'normal',
        },
        {
            path: './fonts/helveticaneuemedium-webfont.woff2',
            weight: '500',
            style: 'normal',
        },
        {
            path: './fonts/helveticaneuelight-webfont.woff2',
            weight: '300',
            style: 'normal',
        }
        // Removed less frequently used weights to improve initial load time
    ],
    // Add display swap for better font loading experience
    display: 'swap',
    // Preload to prioritize the font loading
    preload: true,
    // Specify fallbacks to ensure good fallback rendering
    fallback: ['Helvetica', 'Arial', 'sans-serif']
})