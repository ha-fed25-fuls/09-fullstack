export function getPort(): number {
	const maybe: string | undefined = process.env.PORT
	if( !maybe ) {
		console.log('Hittar inte portnummer i .env-filen!')
		process.exit(1)
	}
	const n: number = Number(maybe)
	if( isNaN(n) ) {
		console.log('Felaktigt portnummer - NaN!')
		process.exit(2)
	}
	return n
}
