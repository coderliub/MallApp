import lbRequest from './index.js'

export const getHomeMutidata = () => {
	return lbRequest.get('/home/multidata', {})
}
