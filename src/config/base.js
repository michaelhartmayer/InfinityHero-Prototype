'use strict';

// Settings configured here will be merged into the final config object.
export default {
	// devtool: 'cheap-module-source-map',
	plugins: [
	 	new webpack.DefinePlugin({
    		'process.env': {
      			'NODE_ENV': JSON.stringify('production')
    		}
  		})
	]
}
