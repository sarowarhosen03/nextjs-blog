export async function register() {
    if (process.env.NEXT_RUNTIME === 'nodejs') {
        //     console.error('nodejs instrumentation ============')
    }

    if (process.env.NEXT_RUNTIME === 'edge') {
///        console.log('edge instrumentation------------')
    }
}
