class TileMap
{
	constructor()
	{
		this.x = 0;
		this.y = 0;
		this.maps = [
			// Scene 0!
			[
				[ 0,0,0,0,1,1,1,0,0,0 ],
				[ 0,0,0,0,1,1,1,0,0,0 ],
				[ 0,0,0,0,1,1,1,0,0,0 ],
				[ 0,0,0,1,1,1,1,1,0,0 ],
				[ 0,0,0,1,1,1,1,1,0,0 ],
				[ 0,0,0,1,1,1,1,1,0,0 ],
				[ 0,0,0,0,1,1,1,0,0,0 ],
				[ 0,0,0,0,1,1,1,0,0,0 ],
				[ 0,0,0,0,1,1,1,0,0,0 ],
				[ 0,0,0,0,1,1,1,0,0,0 ]
			],
			[
				[ 0,0,0,0,1,1,1,0,0,0 ],
				[ 0,0,0,1,1,1,1,1,0,0 ],
				[ 0,0,0,1,0,0,0,1,0,0 ],
				[ 0,0,0,1,0,0,0,1,0,0 ],
				[ 0,0,0,1,0,0,0,1,0,0 ],
				[ 0,0,0,1,0,0,0,1,0,0 ],
				[ 0,0,0,1,1,1,1,1,0,0 ],
				[ 0,0,0,0,1,1,1,0,0,0 ],
				[ 0,0,0,0,1,1,1,0,0,0 ],
				[ 0,0,0,0,1,1,1,0,0,0 ]
			],
			[
				[ 0,0,0,0,1,1,0,0,0,0 ],
				[ 0,0,0,0,1,1,0,0,0,0 ],
				[ 0,0,0,0,1,1,0,0,0,0 ],
				[ 0,0,0,0,1,1,0,0,0,0 ],
				[ 0,0,0,0,1,1,0,0,0,0 ],
				[ 0,0,0,0,1,1,0,0,0,0 ],
				[ 0,0,0,0,1,1,0,0,0,0 ],
				[ 0,0,0,0,1,1,0,0,0,0 ],
				[ 0,0,0,0,1,1,0,0,0,0 ],
				[ 0,0,0,0,1,1,0,0,0,0 ]
			],
			[
				[ 0,0,0,0,1,1,0,0,0,0 ],
				[ 0,0,0,1,1,1,1,0,0,0 ],
				[ 0,0,0,1,0,0,1,0,0,0 ],
				[ 0,0,0,1,0,0,1,0,0,0 ],
				[ 0,0,0,1,1,1,1,0,0,0 ],
				[ 0,0,0,1,0,0,1,0,0,0 ],
				[ 0,0,0,1,0,0,1,0,0,0 ],
				[ 0,0,0,1,1,1,1,0,0,0 ],
				[ 0,0,0,0,1,1,0,0,0,0 ],
				[ 0,0,0,0,1,1,0,0,0,0 ]
			],
			[
				[ 0,0,0,0,0,0,0,1,0,0 ],
				[ 0,0,0,0,0,0,0,1,0,0 ],
				[ 0,0,0,0,1,0,0,1,0,0 ],
				[ 0,0,1,1,1,1,1,1,0,1 ],
				[ 0,0,1,0,0,0,0,0,0,0 ],
				[ 0,0,1,1,1,1,0,0,0,1 ],
				[ 0,0,0,0,0,1,0,0,0,0 ],
				[ 0,0,0,0,0,1,0,0,0,0 ],
				[ 0,0,0,0,0,1,0,0,0,0 ],
				[ 0,0,0,0,0,1,0,0,0,0 ]
			],
			[
				[ 0,0,0,0,0,1,0,0,0,0 ],
				[ 0,0,0,0,0,1,0,0,0,0 ],
				[ 0,0,0,0,0,1,0,0,0,0 ],
				[ 0,0,0,0,1,1,1,0,0,0 ],
				[ 0,0,0,0,1,1,1,0,0,0 ],
				[ 0,0,0,0,1,1,1,0,0,0 ],
				[ 0,0,0,0,0,1,0,0,0,0 ],
				[ 0,0,0,0,0,1,0,0,0,0 ],
				[ 0,0,0,0,0,1,0,0,0,0 ],
				[ 0,0,0,0,0,1,0,0,0,0 ]
			],
			[
				[ 1,0,0,0,0,1,0,0,0,0 ],
				[ 1,0,0,0,0,1,0,0,0,0 ],
				[ 1,0,0,0,0,1,0,0,0,0 ],
				[ 1,1,0,0,0,1,0,0,0,0 ],
				[ 1,0,0,0,0,1,0,0,0,0 ],
				[ 1,0,0,0,0,1,0,0,0,0 ],
				[ 1,1,0,0,0,1,0,0,0,0 ],
				[ 1,0,0,0,0,1,0,0,0,0 ],
				[ 1,0,0,0,0,1,0,0,0,0 ],
				[ 1,1,1,1,1,1,0,0,0,0 ]
			],
			[
				[ 0,0,0,0,1,1,0,0,0,0 ],
				[ 0,0,0,0,1,1,0,0,0,0 ],
				[ 0,0,1,1,1,1,1,1,0,0 ],
				[ 0,0,1,1,1,1,1,1,0,0 ],
				[ 0,0,1,1,1,1,1,1,0,0 ],
				[ 0,0,0,0,1,1,0,0,0,0 ],
				[ 0,0,0,0,1,1,0,0,0,0 ],
				[ 0,0,0,0,1,1,0,0,0,0 ],
				[ 0,0,0,0,1,1,0,0,0,0 ],
				[ 0,0,0,1,1,1,1,0,0,0 ]
			],
			[
				[ 0,0,0,0,0,1,0,0,0,0 ],
				[ 0,0,0,0,0,1,0,0,0,0 ],
				[ 0,0,0,0,0,1,0,0,0,0 ],
				[ 0,0,0,0,0,1,0,0,0,0 ],
				[ 0,0,0,0,0,1,0,0,0,0 ],
				[ 0,0,0,0,0,1,0,0,0,0 ],
				[ 0,0,0,0,0,1,0,0,0,0 ],
				[ 0,0,0,0,0,1,0,0,0,0 ],
				[ 0,0,0,0,0,1,0,0,0,0 ],
				[ 0,0,0,0,0,1,0,0,0,0 ]
			],
			[
				[ 0,0,0,0,0,1,0,0,0,0 ],
				[ 0,0,0,0,0,1,0,0,0,0 ],
				[ 0,0,0,0,0,1,0,0,0,0 ],
				[ 0,0,0,0,1,1,1,0,0,0 ],
				[ 0,0,0,0,1,0,1,0,0,0 ],
				[ 0,0,0,0,1,1,1,0,0,0 ],
				[ 0,0,0,0,0,1,0,0,0,0 ],
				[ 0,0,0,0,0,1,0,0,0,0 ],
				[ 0,0,0,0,0,1,0,0,0,0 ],
				[ 0,0,0,0,0,1,0,0,0,0 ]
			],
			[
				[ 1,0,0,0,0,0,0,0,0,0 ],
				[ 1,0,0,0,0,0,0,0,0,0 ],
				[ 1,0,0,0,0,0,0,0,0,0 ],
				[ 1,0,0,0,0,0,0,0,0,0 ],
				[ 1,1,1,1,1,1,1,1,1,1 ],
				[ 0,0,0,0,0,0,0,0,0,1 ],
				[ 0,0,0,0,0,0,0,0,0,1 ],
				[ 0,0,0,0,0,0,0,0,0,1 ],
				[ 0,0,0,0,0,1,1,1,1,1 ],
				[ 0,0,0,0,0,1,0,0,0,0 ]
			],
			[
				[ 0,0,0,0,0,1,0,0,0,0 ],
				[ 0,0,0,0,0,1,0,0,0,0 ],
				[ 0,0,0,0,0,1,0,0,0,0 ],
				[ 0,0,0,0,0,1,0,0,0,0 ],
				[ 0,0,0,1,1,1,1,1,0,0 ],
				[ 0,0,0,1,0,0,0,1,0,0 ],
				[ 0,0,0,1,0,0,0,1,0,0 ],
				[ 0,0,0,1,1,1,1,1,0,0 ],
				[ 0,0,0,0,0,1,0,0,0,0 ],
				[ 0,0,0,0,0,1,0,0,0,0 ]
			],
			[
				[ 0,0,0,1,1,1,1,1,0,0 ],
				[ 0,0,0,1,1,1,1,1,0,0 ],
				[ 0,0,0,1,1,1,1,1,0,0 ],
				[ 0,0,0,1,1,1,1,1,0,0 ],
				[ 0,0,0,1,1,1,1,1,0,0 ],
				[ 0,0,0,1,1,1,1,1,0,0 ],
				[ 0,0,0,1,1,1,1,1,0,0 ],
				[ 0,0,0,1,1,1,1,1,0,0 ],
				[ 0,0,0,1,1,1,1,1,0,0 ],
				[ 0,0,0,1,1,1,1,1,0,0 ]
			],
			[
				[ 0,0,0,0,1,1,1,0,0,0 ],
				[ 0,0,0,0,1,1,1,0,0,0 ],
				[ 0,0,0,0,1,1,1,0,0,0 ],
				[ 0,0,0,0,1,1,1,0,0,0 ],
				[ 0,0,0,0,1,1,1,0,0,0 ],
				[ 0,0,0,0,1,1,1,0,0,0 ],
				[ 0,0,0,0,1,1,1,0,0,0 ],
				[ 0,0,0,0,1,1,1,0,0,0 ],
				[ 0,0,0,0,1,1,1,0,0,0 ],
				[ 0,0,0,0,1,1,1,0,0,0 ]
			],
			[
				[ 0,0,0,0,1,1,1,0,0,0 ],
				[ 0,0,0,0,1,1,1,0,0,0 ],
				[ 0,0,0,0,1,1,1,0,0,0 ],
				[ 0,0,0,0,1,1,1,0,0,0 ],
				[ 0,0,0,0,1,1,1,0,0,0 ],
				[ 0,0,0,0,1,1,1,0,0,0 ],
				[ 0,0,0,0,1,1,1,0,0,0 ],
				[ 0,0,0,0,1,1,1,0,0,0 ],
				[ 0,0,0,0,1,1,1,0,0,0 ],
				[ 0,0,0,0,1,1,1,0,0,0 ]
			],
			[
				[ 0,0,0,0,1,1,1,0,0,0 ],
				[ 0,0,0,0,1,1,1,0,0,0 ],
				[ 0,0,0,0,1,0,1,0,0,0 ],
				[ 0,0,0,0,1,1,1,0,0,0 ],
				[ 0,0,0,0,1,0,1,0,0,0 ],
				[ 0,0,0,0,1,1,1,0,0,0 ],
				[ 0,0,0,0,1,0,1,0,0,0 ],
				[ 0,0,0,0,1,1,1,0,0,0 ],
				[ 0,0,0,0,1,1,1,0,0,0 ],
				[ 0,0,0,0,1,1,1,0,0,0 ]
			],
			[
				[ 0,0,0,0,1,1,1,0,0,0 ],
				[ 0,0,0,0,1,1,1,0,0,0 ],
				[ 0,0,0,1,1,1,1,1,0,0 ],
				[ 0,0,0,1,1,1,1,1,0,0 ],
				[ 0,0,0,1,1,1,1,1,0,0 ],
				[ 0,0,0,1,1,1,1,1,0,0 ],
				[ 0,0,0,1,1,1,1,1,0,0 ],
				[ 0,0,0,0,1,1,1,0,0,0 ],
				[ 0,0,0,0,1,1,1,0,0,0 ],
				[ 0,0,0,0,1,1,1,0,0,0 ]
			],
			[
				[ 0,0,0,1,1,1,1,1,0,0 ],
				[ 0,0,0,1,1,1,1,1,0,0 ],
				[ 0,0,0,1,1,1,1,1,0,0 ],
				[ 0,0,0,0,1,1,1,0,0,0 ],
				[ 0,0,0,0,1,1,1,0,0,0 ],
				[ 0,0,0,0,1,1,1,0,0,0 ],
				[ 0,0,0,0,1,1,1,0,0,0 ],
				[ 0,0,0,0,1,1,1,0,0,0 ],
				[ 0,0,0,0,1,1,1,0,0,0 ],
				[ 0,0,0,0,1,1,1,0,0,0 ]
			],
			[
				[ 0,0,0,0,0,1,0,0,0,0 ],
				[ 0,0,0,0,0,1,1,1,1,0 ],
				[ 0,0,0,0,0,0,0,0,1,0 ],
				[ 0,0,0,0,0,0,0,0,1,0 ],
				[ 0,0,0,0,0,0,0,0,1,0 ],
				[ 0,0,0,0,0,1,1,1,1,0 ],
				[ 0,0,0,0,0,1,0,0,0,0 ],
				[ 0,0,0,0,0,1,0,0,0,0 ],
				[ 0,0,0,0,0,1,0,0,0,0 ],
				[ 0,0,0,0,0,1,0,0,0,0 ]
			],
			[
				[ 0,0,0,0,0,1,0,0,0,0 ],
				[ 0,0,0,0,0,1,0,0,0,0 ],
				[ 0,0,0,1,1,1,1,1,0,0 ],
				[ 0,0,0,1,0,0,0,1,0,0 ],
				[ 0,0,0,1,0,1,0,1,0,0 ],
				[ 0,0,0,1,0,0,0,1,0,0 ],
				[ 0,0,0,1,1,1,1,1,0,0 ],
				[ 0,0,0,0,0,1,0,0,0,0 ],
				[ 0,0,0,0,0,1,0,0,0,0 ],
				[ 0,0,0,0,0,1,0,0,0,0 ]
			],
			[
				[ 0,1,1,1,1,1,1,1,1,0 ],
				[ 0,1,1,1,1,1,1,1,1,0 ],
				[ 0,1,1,1,1,1,1,1,1,0 ],
				[ 0,1,1,1,1,1,1,1,1,0 ],
				[ 0,1,1,1,1,1,1,1,1,0 ],
				[ 0,1,1,1,1,1,1,1,1,0 ],
				[ 0,1,1,1,1,1,1,1,1,0 ],
				[ 0,1,1,1,1,1,1,1,1,0 ],
				[ 0,1,1,1,1,1,1,1,1,0 ],
				[ 0,1,1,1,1,1,1,1,1,0 ]
			],
			// Scene 1!
			[
				[ 0,0,0,0,0,0,0,0,0,2 ],
				[ 0,0,2,2,2,2,2,2,2,2 ],
				[ 0,2,2,0,0,0,0,0,0,2 ],
				[ 0,2,0,0,0,0,0,0,0,2 ],
				[ 0,2,0,0,0,0,0,0,0,2 ],
				[ 0,2,2,2,2,2,2,2,2,2 ],
				[ 0,0,0,0,2,2,2,0,0,0 ],
				[ 0,0,0,0,2,2,2,0,0,0 ],
				[ 0,0,0,0,2,2,2,0,0,0 ],
				[ 0,0,0,0,2,2,2,0,0,0 ]
			],
			[
				[ 0,0,0,0,2,2,2,0,0,0 ],
				[ 0,0,0,0,2,0,2,0,0,0 ],
				[ 0,0,0,0,2,0,2,0,0,0 ],
				[ 0,0,0,0,2,0,2,0,0,0 ],
				[ 0,0,0,0,2,2,2,0,0,0 ],
				[ 0,0,0,0,2,0,2,0,0,0 ],
				[ 0,0,0,0,2,0,2,0,0,0 ],
				[ 0,0,0,0,2,0,2,0,0,0 ],
				[ 0,0,0,0,2,2,2,0,0,0 ],
				[ 0,0,0,0,2,2,2,0,0,0 ]
			],
			[
				[ 0,0,0,0,2,0,0,0,0,0 ],
				[ 0,0,0,0,2,0,0,0,0,0 ],
				[ 0,0,0,0,2,2,2,2,2,2 ],
				[ 0,0,0,0,0,0,0,2,0,0 ],
				[ 0,2,2,2,2,2,0,2,0,0 ],
				[ 0,0,0,2,0,2,2,2,0,0 ],
				[ 0,0,0,2,0,0,0,0,0,0 ],
				[ 0,0,0,2,2,2,2,2,0,0 ],
				[ 0,0,0,0,0,2,0,0,0,0 ],
				[ 0,0,0,0,0,2,0,0,0,0 ]
			],
			[
				[ 0,0,0,0,2,2,2,0,0,0 ],
				[ 0,0,0,0,2,2,2,0,0,0 ],
				[ 0,0,0,0,2,2,2,0,0,0 ],
				[ 0,0,0,0,2,2,2,0,0,0 ],
				[ 0,0,0,0,2,2,2,0,0,0 ],
				[ 0,0,0,0,2,2,2,0,0,0 ],
				[ 0,0,0,0,2,2,2,0,0,0 ],
				[ 0,0,0,0,2,2,2,0,0,0 ],
				[ 0,0,0,0,2,2,2,0,0,0 ],
				[ 0,0,0,0,2,2,2,0,0,0 ]
			],
			[
				[ 0,0,0,0,0,2,0,0,0,0 ],
				[ 0,0,0,0,0,2,0,0,0,0 ],
				[ 0,0,2,2,2,2,0,0,0,0 ],
				[ 0,0,2,0,0,2,0,0,0,0 ],
				[ 0,0,2,0,0,2,0,0,0,0 ],
				[ 0,0,2,0,0,2,0,0,0,0 ],
				[ 0,0,2,2,2,2,0,0,0,0 ],
				[ 0,0,0,0,0,2,0,0,0,0 ],
				[ 0,0,0,0,0,2,0,0,0,0 ],
				[ 0,0,0,0,0,2,0,0,0,0 ]
			],
			[
				[ 0,0,0,0,2,2,2,0,0,0 ],
				[ 0,0,0,0,2,2,2,0,0,0 ],
				[ 0,0,0,0,2,2,2,0,0,0 ],
				[ 0,0,0,2,2,2,2,2,0,0 ],
				[ 0,0,0,2,2,2,2,2,0,0 ],
				[ 0,0,0,2,2,2,2,2,0,0 ],
				[ 0,0,0,0,2,2,2,0,0,0 ],
				[ 0,0,0,0,2,2,2,0,0,0 ],
				[ 0,0,0,0,2,2,2,0,0,0 ],
				[ 0,0,0,0,2,2,2,0,0,0 ]
			],
			[
				[ 0,0,0,0,0,2,0,0,0,0 ],
				[ 0,0,0,2,2,2,0,0,0,0 ],
				[ 0,0,0,0,0,2,0,0,0,0 ],
				[ 0,0,0,0,0,2,2,2,0,0 ],
				[ 0,0,0,0,0,2,0,0,0,0 ],
				[ 0,0,0,2,2,2,0,0,0,0 ],
				[ 0,0,0,0,0,2,0,0,0,0 ],
				[ 0,0,0,0,0,2,2,2,0,0 ],
				[ 0,0,0,0,0,2,0,0,0,0 ],
				[ 0,0,0,0,0,2,0,0,0,0 ]
			],
			[
				[ 0,0,0,0,2,2,2,0,0,0 ],
				[ 0,0,0,0,2,2,2,0,0,0 ],
				[ 0,0,0,0,2,2,2,0,0,0 ],
				[ 0,0,0,0,2,2,2,0,0,0 ],
				[ 0,0,0,0,2,2,2,0,0,0 ],
				[ 0,0,0,0,2,2,2,0,0,0 ],
				[ 0,0,0,0,2,2,2,0,0,0 ],
				[ 0,0,0,0,2,2,2,0,0,0 ],
				[ 0,0,0,0,2,2,2,0,0,0 ],
				[ 0,0,0,0,2,2,2,0,0,0 ]
			],
			[
				[ 0,0,0,0,2,2,2,0,0,0 ],
				[ 0,0,0,0,2,2,2,0,0,0 ],
				[ 0,0,0,0,2,2,2,0,0,0 ],
				[ 0,0,0,2,2,2,2,2,0,0 ],
				[ 0,0,0,2,2,2,2,2,0,0 ],
				[ 0,0,0,2,2,2,2,2,0,0 ],
				[ 0,0,0,0,2,2,2,0,0,0 ],
				[ 0,0,0,0,2,2,2,0,0,0 ],
				[ 0,0,0,0,2,2,2,0,0,0 ],
				[ 0,0,0,0,2,2,2,0,0,0 ]
			],
			[
				[ 0,0,0,2,0,0,0,0,0,0 ],
				[ 0,0,0,2,0,0,0,0,0,0 ],
				[ 0,0,0,2,0,0,0,0,0,0 ],
				[ 0,0,0,2,0,2,2,2,2,0 ],
				[ 0,0,0,2,0,2,0,0,2,0 ],
				[ 0,0,0,2,0,2,0,0,2,0 ],
				[ 0,0,0,2,2,2,0,0,2,0 ],
				[ 0,0,0,0,0,0,0,0,2,0 ],
				[ 0,0,0,0,0,2,2,2,2,0 ],
				[ 0,0,0,0,0,2,0,0,0,0 ]
			],
			[
				[ 0,0,0,2,2,2,2,0,0,0 ],
				[ 0,0,0,2,2,2,2,0,0,0 ],
				[ 0,0,2,2,0,0,2,2,0,0 ],
				[ 0,0,2,0,0,0,0,2,0,0 ],
				[ 0,0,2,0,0,0,0,2,0,0 ],
				[ 0,0,2,0,0,0,0,2,0,0 ],
				[ 0,0,2,2,0,0,2,2,0,0 ],
				[ 0,0,0,2,2,2,2,0,0,0 ],
				[ 0,0,0,2,2,2,2,0,0,0 ],
				[ 0,0,0,2,2,2,2,0,0,0 ]
			],
			[
				[ 0,0,0,0,2,2,2,0,0,0 ],
				[ 0,0,0,0,2,2,2,0,0,0 ],
				[ 0,0,0,2,2,2,2,2,0,0 ],
				[ 0,0,2,2,2,2,2,2,2,0 ],
				[ 0,0,2,2,2,2,2,2,2,0 ],
				[ 0,0,2,2,2,2,2,2,2,0 ],
				[ 0,0,0,2,2,2,2,2,0,0 ],
				[ 0,0,0,0,2,2,2,0,0,0 ],
				[ 0,0,0,0,2,2,2,0,0,0 ],
				[ 0,0,0,0,2,2,2,0,0,0 ]
			],
			[
				[ 0,0,0,0,0,2,0,0,0,0 ],
				[ 0,0,0,0,0,2,0,0,0,0 ],
				[ 0,0,0,0,0,2,2,2,2,2 ],
				[ 0,0,0,0,0,0,0,0,0,2 ],
				[ 2,2,2,2,2,2,2,2,2,2 ],
				[ 2,0,0,0,0,0,0,0,0,0 ],
				[ 2,2,2,2,2,2,2,2,2,2 ],
				[ 0,0,0,0,0,0,0,0,0,2 ],
				[ 0,0,0,0,0,2,2,2,2,2 ],
				[ 0,0,0,0,0,2,0,0,0,0 ]
			]
		];
		this.enemies = [
			// Scene 0!
			[
				new Enemy( 4 * 80,3 * 80,[ 3,3,3,1,1,2,2,2,2,0,0,3 ] ),
				new Enemy( 6 * 80,5 * 80,[ 2,2,2,0,0,3,3,3,3,1,1,2 ] )
			],
			[
				new Enemy( 7 * 80,4 * 80,[ 1,1,2,2,2,2,0,0,0,0,0,3,3,3,3,1,1,1 ] ),
				new Enemy( 3 * 80,2 * 80,[ 0,3,3,3,3,1,1,1,1,1,2,2,2,2,0,0,0,0 ] )
			],
			[],
			[
				new Enemy( 6 * 80,4 * 80,[ 1,1,1,0,0,0,0,0,0,1,1,1 ] )
			],
			[],
			[],
			[],
			[],
			[
				new Enemy( 3 * 80,3 * 80,[ 3,3,3,3,2,2,2,2 ] ),
				new Enemy( 7 * 80,6 * 80,[ 2,2,2,2,3,3,3,3 ] )
			],
			[
				new Enemy( 4 * 80,3 * 80,[ 3,3,1,1,2,2,0,0 ] )
			],
			[
				new Enemy( 1 * 80,3 * 80,[ 1,1,3,3,0,0,3,3,1,1,3,3,0,0,3,1,1,2,2,0,0,2,2,1,1,2,2,0,0,2 ],3 )
			],
			[
				new Enemy( 3 * 80,4 * 80,[ 3,3,3,3,1,1,1,2,2,2,2,0,0,0 ] ),
				new Enemy( 7 * 80,7 * 80,[ 2,2,2,2,0,0,0,3,3,3,3,1,1,1 ] )
			],
			[],
			[],
			[],
			[
				new Enemy( 4 * 80,1 * 80,[ 3,3,1,1,2,2,1,1,3,3,1,1,2,2,0,0,3,3,0,0,2,2,0,0 ] )
			],
			[
				new Enemy( 3 * 80,2 * 80,[ 1,1,1,1,0,0,0,0 ] ),
				new Enemy( 7 * 80,6 * 80,[ 0,0,0,0,1,1,1,1 ] ),
			],
			[],
			[],
			[],
			[
				new Enemy( 4 * 80,3 * 80,[ 3,1,2,0 ] ),
				new Enemy( 3 * 80,2 * 80,[ 3,3,3,1,1,1,2,2,2,0,0,0 ] ),
				new Enemy( 2 * 80,1 * 80,[ 3,3,3,3,3,1,1,1,1,1,2,2,2,2,2,0,0,0,0,0 ] ),
				new Enemy( 1 * 80,0 * 80,[ 3,3,3,3,3,3,3,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,0,0,0,0,0,0,0,0 ] )
			],
			// Sceme 1!
			[],
			[
				new Enemy( 4 * 80,1 * 80,[ 1,1,1,1,1,1,0,0,0,0,0,0 ],undefined,1 ),
				new Enemy( 6 * 80,7 * 80,[ 0,0,0,0,0,0,1,1,1,1,1,1 ],undefined,1 )
			],
			[
				new Enemy( 7 * 80,7 * 80,[ 2,2,2,2,3,3,3,3 ],undefined,1 ),
				new Enemy( 1 * 80,4 * 80,[ 3,3,3,3,2,2,2,2 ],undefined,1 ),
				new Enemy( 9 * 80,2 * 80,[ 2,2,2,2,2,3,3,3,3,3 ],undefined,1 )
			],
			[
				new Enemy( 4 * 80,0 * 80,[ 1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0 ],undefined,1 ),
				new Enemy( 5 * 80,3 * 80,[ 1,1,1,1,1,0,0,0,0,0,0,0,0,1,1,1 ],undefined,1 ),
				new Enemy( 6 * 80,6 * 80,[ 1,1,0,0,0,0,0,0,0,0,1,1,1,1,1,1 ],undefined,1 )
			],
			[
				new Enemy( 1 * 80,3 * 80,[ 3,3,1,1,2,2,0,0 ],undefined,1 ),
				new Enemy( 5 * 80,2 * 80,[ 1,1,1,1,0,0,0,0 ],undefined,1 )
			],
			[
				new Enemy( 3 * 80,3 * 80,[ 3,3,3,3,2,2,2,2 ],undefined,1 ),
				new Enemy( 7 * 80,4 * 80,[ 2,2,2,2,3,3,3,3 ],undefined,1 ),
				new Enemy( 3 * 80,5 * 80,[ 3,3,3,3,2,2,2,2 ],undefined,1 )
			],
			[
				new Enemy( 5 * 80,1 * 80,[ 1,1,1,1,1,1,0,0,0,0,0,0 ],undefined,1 )
			],
			[],
			[
				new Enemy( 6 * 80,6 * 80,[ 2,2,3,3 ],undefined,1 )
			],
			[
				new Enemy( 5 * 80,3 * 80,[ 1,1,1,1,1,3,3,3,0,0,0,0,0,2,2,2 ],undefined,1 )
			],
			[],
			[],
			[]
		];
		this.fallingFloors = [
			// Scene 0!
			[
				new FallingFloor( 4 * 80,4 * 80,80,80 ),
				new FallingFloor( 5 * 80,4 * 80,80,80 ),
				new FallingFloor( 6 * 80,4 * 80,80,80 )
			],
			[
				new FallingFloor( 3 * 80,1 * 80,80,80 ),
				new FallingFloor( 4 * 80,1 * 80,80,80 ),
				new FallingFloor( 5 * 80,1 * 80,80,80 ),
				new FallingFloor( 6 * 80,1 * 80,80,80 ),
				new FallingFloor( 7 * 80,1 * 80,80,80 ),
				new FallingFloor( 3 * 80,2 * 80,80,80 ),
				new FallingFloor( 7 * 80,2 * 80,80,80 ),
				new FallingFloor( 3 * 80,3 * 80,80,80 ),
				new FallingFloor( 7 * 80,3 * 80,80,80 ),
				new FallingFloor( 3 * 80,4 * 80,80,80 ),
				new FallingFloor( 7 * 80,4 * 80,80,80 ),
				new FallingFloor( 3 * 80,5 * 80,80,80 ),
				new FallingFloor( 7 * 80,5 * 80,80,80 ),
				new FallingFloor( 3 * 80,6 * 80,80,80 ),
				new FallingFloor( 4 * 80,6 * 80,80,80 ),
				new FallingFloor( 5 * 80,6 * 80,80,80 ),
				new FallingFloor( 6 * 80,6 * 80,80,80 ),
				new FallingFloor( 7 * 80,6 * 80,80,80 )
			],
			[],
			[
				new FallingFloor( 4 * 80,4 * 80,80,80 ),
				new FallingFloor( 5 * 80,4 * 80,80,80 )
			],
			[
				new FallingFloor( 4 * 80,2 * 80,80,80 )
			],
			[],
			[
				new FallingFloor( 0 * 80,0 * 80,80,80 ),
				new FallingFloor( 0 * 80,1 * 80,80,80 ),
				new FallingFloor( 0 * 80,2 * 80,80,80 ),
				new FallingFloor( 0 * 80,3 * 80,80,80 ),
				new FallingFloor( 0 * 80,4 * 80,80,80 ),
				new FallingFloor( 0 * 80,5 * 80,80,80 ),
				new FallingFloor( 0 * 80,6 * 80,80,80 ),
				new FallingFloor( 0 * 80,7 * 80,80,80 ),
				new FallingFloor( 0 * 80,8 * 80,80,80 )
			],
			[],
			[],
			[],
			[
				new FallingFloor( 1 * 80,4 * 80 ),
				new FallingFloor( 2 * 80,4 * 80 ),
				new FallingFloor( 3 * 80,4 * 80 ),
				new FallingFloor( 4 * 80,4 * 80 ),
				new FallingFloor( 5 * 80,4 * 80 ),
				new FallingFloor( 6 * 80,4 * 80 ),
				new FallingFloor( 7 * 80,4 * 80 ),
				new FallingFloor( 8 * 80,4 * 80 )
			],
			[],
			[],
			[
				new FallingFloor( 4 * 80,7 * 80 ),
				new FallingFloor( 5 * 80,7 * 80 ),
				new FallingFloor( 6 * 80,7 * 80 ),
				new FallingFloor( 4 * 80,6 * 80 ),
				new FallingFloor( 5 * 80,6 * 80 ),
				new FallingFloor( 6 * 80,6 * 80 ),
				new FallingFloor( 4 * 80,4 * 80 ),
				new FallingFloor( 5 * 80,4 * 80 ),
				new FallingFloor( 6 * 80,4 * 80 ),
				new FallingFloor( 4 * 80,3 * 80 ),
				new FallingFloor( 5 * 80,3 * 80 ),
				new FallingFloor( 6 * 80,3 * 80 ),
			],
			[],
			[],
			[],
			[],
			[],
			[],
			[],
			// Scene 1!
			[],
			[
				new FallingFloor( 5 * 80,4 * 80,undefined,undefined,1 ),
				new FallingFloor( 4 * 80,4 * 80,undefined,undefined,1 ),
				new FallingFloor( 6 * 80,4 * 80,undefined,undefined,1 )
			],
			[],
			[],
			[],
			[],
			[],
			[],
			[],
			[],
			[
				new FallingFloor( 3 * 80,1 * 80,undefined,undefined,1 ),
				new FallingFloor( 4 * 80,1 * 80,undefined,undefined,1 ),
				new FallingFloor( 5 * 80,1 * 80,undefined,undefined,1 ),
				new FallingFloor( 6 * 80,1 * 80,undefined,undefined,1 ),
				new FallingFloor( 3 * 80,7 * 80,undefined,undefined,1 ),
				new FallingFloor( 4 * 80,7 * 80,undefined,undefined,1 ),
				new FallingFloor( 5 * 80,7 * 80,undefined,undefined,1 ),
				new FallingFloor( 6 * 80,7 * 80,undefined,undefined,1 )
			],
			[
				new FallingFloor( 3 * 80,2 * 80,undefined,undefined,1 ),
				new FallingFloor( 5 * 80,2 * 80,undefined,undefined,1 ),
				new FallingFloor( 7 * 80,2 * 80,undefined,undefined,1 ),
				new FallingFloor( 2 * 80,3 * 80,undefined,undefined,1 ),
				new FallingFloor( 4 * 80,3 * 80,undefined,undefined,1 ),
				new FallingFloor( 6 * 80,3 * 80,undefined,undefined,1 ),
				new FallingFloor( 8 * 80,3 * 80,undefined,undefined,1 ),
				new FallingFloor( 3 * 80,4 * 80,undefined,undefined,1 ),
				new FallingFloor( 5 * 80,4 * 80,undefined,undefined,1 ),
				new FallingFloor( 7 * 80,4 * 80,undefined,undefined,1 ),
				new FallingFloor( 2 * 80,5 * 80,undefined,undefined,1 ),
				new FallingFloor( 4 * 80,5 * 80,undefined,undefined,1 ),
				new FallingFloor( 6 * 80,5 * 80,undefined,undefined,1 ),
				new FallingFloor( 8 * 80,5 * 80,undefined,undefined,1 ),
				new FallingFloor( 3 * 80,6 * 80,undefined,undefined,1 ),
				new FallingFloor( 5 * 80,6 * 80,undefined,undefined,1 ),
				new FallingFloor( 7 * 80,6 * 80,undefined,undefined,1 )
			],
			[]
		];
		this.flameThrowers = [
			// Scene 0!
			[],
			[],
			[],
			[],
			[
				new FlameThrower( 9 * 80,3 * 80,110,2 ),
				new FlameThrower( 7 * 80,5 * 80, 80,2 )
			],
			[
				new FlameThrower( 5 * 80,4 * 80,30,2 ),
				new FlameThrower( 5 * 80,4 * 80,30,3 )
			],
			[
				new FlameThrower( 8 * 80,7 * 80,70,2 ),
				new FlameThrower( 2 * 80,6 * 80,70,3 ),
				new FlameThrower( 8 * 80,5 * 80,70,2 ),
				new FlameThrower( 2 * 80,4 * 80,80,3 ),
				new FlameThrower( 8 * 80,3 * 80,80,2 ),
				new FlameThrower( 2 * 80,2 * 80,80,3 ),
				new FlameThrower( 8 * 80,1 * 80,80,2 )
			],
			[],
			[],
			[],
			[],
			[],
			[],
			[],
			[],
			[],
			[],
			[
				new FlameThrower( 4 * 80,0 * 80,60,1 ),
				new FlameThrower( 5 * 80,0 * 80,70,1 ),
				new FlameThrower( 6 * 80,0 * 80,80,1 )
			],
			[
				new FlameThrower( 4 * 80,5 * 80,55,3 ),
				new FlameThrower( 8 * 80,6 * 80,55,0 ),
				new FlameThrower( 9 * 80,1 * 80,55,2 )
			],
			[
				new FlameThrower( 5 * 80,4 * 80,20,0 ),
				new FlameThrower( 5 * 80,4 * 80,20,1 ),
				new FlameThrower( 5 * 80,4 * 80,55,2 ),
				new FlameThrower( 5 * 80,4 * 80,33,3 )
			],
			[],
			// Scene 1!
			[
				new FlameThrower( 3 * 80,3 * 80,30,1 ),
				new FlameThrower( 2 * 80,6 * 80,45,3 ),
				new FlameThrower( 7 * 80,7 * 80,30,0 ),
				new FlameThrower( 8 * 80,6 * 80,45,2 )
			],
			[],
			[],
			[],
			[],
			[],
			[],
			[
				new FlameThrower( 1 * 80,5 * 80,37,3 ),
				new FlameThrower( 9 * 80,5 * 80,37,2 )
			],
			[],
			[],
			[],
			[],
			[
				new FlameThrower( 0 * 80,1 * 80,90,1 ),
				new FlameThrower( 2 * 80,1 * 80,90,1 ),
				new FlameThrower( 4 * 80,1 * 80,90,1 ),
				new FlameThrower( 6 * 80,1 * 80,90,1 ),
				new FlameThrower( 8 * 80,1 * 80,90,1 )
			]
		];
		this.spikes = [
			// Scene 0!
			[],
			[
				new Spike( 4 * 80,7 * 80,0 ),
				new Spike( 5 * 80,7 * 80,5 ),
				new Spike( 6 * 80,7 * 80,9 ),
			],
			[
				new Spike( 5 * 80,0 * 80,14 ),
				new Spike( 4 * 80,1 * 80,12 ),
				new Spike( 5 * 80,2 * 80,10 ),
				new Spike( 4 * 80,3 * 80, 8 ),
				new Spike( 5 * 80,4 * 80, 6 ),
				new Spike( 4 * 80,5 * 80, 4 ),
				new Spike( 5 * 80,6 * 80, 2 ),
				new Spike( 4 * 80,7 * 80, 0 ),
				new Spike( 5 * 80,8 * 80, 0 ),
				new Spike( 4 * 80,9 * 80, 0 )
			],
			[
				new Spike( 3 * 80,1 * 80,14 ),
				new Spike( 3 * 80,2 * 80,12 ),
				new Spike( 3 * 80,3 * 80, 9 ),
				new Spike( 3 * 80,4 * 80, 7 ),
				new Spike( 3 * 80,5 * 80, 4 ),
				new Spike( 3 * 80,6 * 80, 2 ),
				new Spike( 3 * 80,7 * 80, 0 )
			],
			[],
			[],
			[],
			[
				new Spike( 2 * 80,2 * 80,14 ),
				new Spike( 3 * 80,2 * 80,13 ),
				new Spike( 4 * 80,2 * 80,12 ),
				new Spike( 5 * 80,2 * 80,11 ),
				new Spike( 6 * 80,2 * 80,10 ),
				new Spike( 7 * 80,2 * 80, 9 ),
				new Spike( 2 * 80,3 * 80,11 ),
				new Spike( 3 * 80,3 * 80,10 ),
				new Spike( 4 * 80,3 * 80, 9 ),
				new Spike( 5 * 80,3 * 80, 8 ),
				new Spike( 6 * 80,3 * 80, 7 ),
				new Spike( 7 * 80,3 * 80, 6 ),
				new Spike( 2 * 80,4 * 80, 8 ),
				new Spike( 3 * 80,4 * 80, 7 ),
				new Spike( 4 * 80,4 * 80, 6 ),
				new Spike( 5 * 80,4 * 80, 5 ),
				new Spike( 6 * 80,4 * 80, 4 ),
				new Spike( 7 * 80,4 * 80, 3 )
			],
			[],
			[
				new Spike( 5 * 80,6 * 80,0 )
			],
			[],
			[],
			[
				new Spike( 3 * 80,5 * 80,0 ),
				new Spike( 4 * 80,5 * 80,0 ),
				new Spike( 5 * 80,5 * 80,0 ),
				new Spike( 6 * 80,5 * 80,0 ),
				new Spike( 7 * 80,5 * 80,0 ),
				new Spike( 3 * 80,4 * 80,7 ),
				new Spike( 4 * 80,4 * 80,7 ),
				new Spike( 5 * 80,4 * 80,7 ),
				new Spike( 6 * 80,4 * 80,7 ),
				new Spike( 7 * 80,4 * 80,7 ),
				new Spike( 3 * 80,3 * 80,0 ),
				new Spike( 4 * 80,3 * 80,0 ),
				new Spike( 5 * 80,3 * 80,0 ),
				new Spike( 6 * 80,3 * 80,0 ),
				new Spike( 7 * 80,3 * 80,0 )
			],
			[
				new Spike( 4 * 80,5 * 80, 0 ),
				new Spike( 5 * 80,5 * 80, 4 ),
				new Spike( 6 * 80,5 * 80, 8 ),
				new Spike( 4 * 80,2 * 80, 8 ),
				new Spike( 5 * 80,2 * 80, 4 ),
				new Spike( 6 * 80,2 * 80, 0 ),
			],
			[
				new Spike( 4 * 80,7 * 80,0 ),
				new Spike( 4 * 80,6 * 80,0 ),
				new Spike( 4 * 80,5 * 80,0 ),
				new Spike( 4 * 80,4 * 80,0 ),
				new Spike( 4 * 80,3 * 80,0 ),
				new Spike( 4 * 80,2 * 80,0 ),
				new Spike( 4 * 80,1 * 80,0 ),
				new Spike( 5 * 80,7 * 80,7 ),
				new Spike( 5 * 80,6 * 80,7 ),
				new Spike( 5 * 80,5 * 80,7 ),
				new Spike( 5 * 80,4 * 80,7 ),
				new Spike( 5 * 80,3 * 80,7 ),
				new Spike( 5 * 80,2 * 80,7 ),
				new Spike( 5 * 80,1 * 80,7 ),
				new Spike( 6 * 80,7 * 80,0 ),
				new Spike( 6 * 80,6 * 80,0 ),
				new Spike( 6 * 80,5 * 80,0 ),
				new Spike( 6 * 80,4 * 80,0 ),
				new Spike( 6 * 80,3 * 80,0 ),
				new Spike( 6 * 80,2 * 80,0 ),
				new Spike( 6 * 80,1 * 80,0 )
			],
			[],
			[
				new Spike( 4 * 80,2 * 80, 0 ),
				new Spike( 5 * 80,2 * 80, 0 ),
				new Spike( 6 * 80,2 * 80, 0 ),
				new Spike( 4 * 80,3 * 80, 3 ),
				new Spike( 5 * 80,3 * 80, 3 ),
				new Spike( 6 * 80,3 * 80, 3 ),
				new Spike( 4 * 80,4 * 80, 6 ),
				new Spike( 5 * 80,4 * 80, 6 ),
				new Spike( 6 * 80,4 * 80, 6 ),
				new Spike( 4 * 80,5 * 80, 9 ),
				new Spike( 5 * 80,5 * 80, 9 ),
				new Spike( 6 * 80,5 * 80, 9 ),
				new Spike( 4 * 80,6 * 80,12 ),
				new Spike( 5 * 80,6 * 80,12 ),
				new Spike( 6 * 80,6 * 80,12 )
			],
			[],
			[],
			[],
			[],
			// Scene 1!
			[],
			[],
			[],
			[],
			[],
			[],
			[
				new Spike( 3 * 80,1 * 80, 2 ),
				new Spike( 4 * 80,1 * 80, 2 ),
				new Spike( 6 * 80,3 * 80, 6 ),
				new Spike( 7 * 80,3 * 80, 6 ),
				new Spike( 3 * 80,5 * 80,10 ),
				new Spike( 4 * 80,5 * 80,10 ),
				new Spike( 6 * 80,7 * 80,14 ),
				new Spike( 7 * 80,7 * 80,14 )
			],
			[
				new Spike( 4 * 80,0 * 80,10 ),
				new Spike( 6 * 80,0 * 80,10 ),
				new Spike( 5 * 80,1 * 80, 9 ),
				new Spike( 4 * 80,2 * 80, 8 ),
				new Spike( 6 * 80,2 * 80, 8 ),
				new Spike( 5 * 80,3 * 80, 6 ),
				new Spike( 4 * 80,4 * 80, 5 ),
				new Spike( 6 * 80,4 * 80, 5 ),
				new Spike( 5 * 80,5 * 80, 4 ),
				new Spike( 4 * 80,6 * 80, 3 ),
				new Spike( 6 * 80,6 * 80, 3 ),
				new Spike( 5 * 80,7 * 80, 2 ),
				new Spike( 4 * 80,8 * 80, 1 ),
				new Spike( 6 * 80,8 * 80, 1 )
			],
			[
				new Spike( 3 * 80,3 * 80,14 ),
				new Spike( 4 * 80,3 * 80,12 ),
				new Spike( 3 * 80,4 * 80,12 ),
				new Spike( 5 * 80,3 * 80,10 ),
				new Spike( 4 * 80,4 * 80,10 ),
				new Spike( 3 * 80,5 * 80,10 ),
				new Spike( 6 * 80,3 * 80, 8 ),
				new Spike( 5 * 80,4 * 80, 8 ),
				new Spike( 4 * 80,5 * 80, 8 ),
				new Spike( 7 * 80,3 * 80, 6 ),
				new Spike( 6 * 80,4 * 80, 6 ),
				new Spike( 5 * 80,5 * 80, 6 ),
				new Spike( 7 * 80,4 * 80, 4 ),
				new Spike( 6 * 80,5 * 80, 4 ),
				new Spike( 7 * 80,5 * 80, 2 )
			],
			[],
			[
				new Spike( 3 * 80,2 * 80, 0 ),
				new Spike( 2 * 80,2 * 80, 1 ),
				new Spike( 2 * 80,3 * 80, 2 ),
				new Spike( 2 * 80,4 * 80, 3 ),
				new Spike( 2 * 80,5 * 80, 4 ),
				new Spike( 2 * 80,6 * 80, 5 ),
				new Spike( 3 * 80,6 * 80, 7 ),
				new Spike( 6 * 80,6 * 80, 8 ),
				new Spike( 7 * 80,6 * 80, 9 ),
				new Spike( 7 * 80,5 * 80,10 ),
				new Spike( 7 * 80,4 * 80,11 ),
				new Spike( 7 * 80,3 * 80,12 ),
				new Spike( 7 * 80,2 * 80,13 ),
				new Spike( 6 * 80,2 * 80,14 )
			],
			[
				new Spike( 4 * 80,2 * 80,0 ),
				new Spike( 6 * 80,2 * 80,0 ),
				new Spike( 3 * 80,3 * 80,0 ),
				new Spike( 5 * 80,3 * 80,0 ),
				new Spike( 7 * 80,3 * 80,0 ),
				new Spike( 2 * 80,4 * 80,0 ),
				new Spike( 4 * 80,4 * 80,0 ),
				new Spike( 6 * 80,4 * 80,0 ),
				new Spike( 8 * 80,4 * 80,0 ),
				new Spike( 3 * 80,5 * 80,0 ),
				new Spike( 5 * 80,5 * 80,0 ),
				new Spike( 7 * 80,5 * 80,0 ),
				new Spike( 4 * 80,6 * 80,0 ),
				new Spike( 6 * 80,6 * 80,0 )
			],
			[]
		];
		this.currentMap = -1;
		this.colors = [
			[ 1,0,1,0,1,1,1,0,0,0 ],
			[ 1,1,1,0,0,1,0,0,0,0 ],
			[ 1,0,1,0,1,1,1,0,0,0 ],
			[ 0,0,0,0,0,0,0,0,0,0 ],
			[ 1,0,1,1,1,1,0,1,0,1 ],
			[ 0,1,0,1,0,1,0,1,0,1 ],
			[ 0,1,0,1,1,1,0,1,1,1 ],
			[ 0,0,0,0,0,0,0,0,0,0 ],
			[ 0,0,0,0,0,0,0,0,0,0 ],
			[ 0,0,0,0,0,0,0,0,0,0 ]
		];
		this.audio0 = new Audio( 'audio/level_win_1.mp3' );
		this.audio1 = new Audio( 'audio/level_win_2.mp3' );
		this.audio2 = new Audio( 'audio/level_win_3.mp3' );
		this.deathSounds = [
			new Audio( 'audio/splat_1.mp3' ),
			new Audio( 'audio/splat_2.mp3' ),
			new Audio( 'audio/splat_3.mp3' ),
			new Audio( 'audio/splat_4.mp3' )
		];
		this.fallSounds = [
			new Audio( 'audio/fall_1.mp3' ),
			new Audio( 'audio/fall_2.mp3' ),
			new Audio( 'audio/fall_3.mp3' )
		]
		this.colorCounter = 0;
		this.colorCounterMax = 15; // Frequency of tile color updates; Lower is faster.
		this.transitionAlpha = 1.0;
	}
	InitColors()
	{
		for( var i = 0; i < this.colors.length; ++i )
		{
			for( var j = 0; j < this.colors[i].length; ++j )
			{
				if( this.maps[this.currentMap][j][i] === 0 )
				{
					const randColor = "#" + Random( 11,22 ) + Random( 11,22 ) + Random( 22,44 );
					this.colors[j][i] = randColor;
				}
				else if( this.maps[this.currentMap][j][i] === 1 )
				{
					const randRGB = Random( 33,66 );
					const randColor = "#" + randRGB + randRGB + randRGB;
					this.colors[j][i] = randColor;
				}
				else if( this.maps[this.currentMap][j][i] === 2 )
				{
					// TODO: Fix color generation to be more yellow!
					const randR = Random( 44,66 );
					const randG = randR - 15;
					const randB = Random( 11,22 );
					const randColor = "#" + randR + randG + randB;
					this.colors[j][i] = randColor;
				}
			}
		}
	}
	RandomizeTileColor()
	{
		var randRow = Random( 0,this.colors[0].length - 1 );
		var randCol = Random( 0,this.colors.length - 1 );
		while( this.maps[this.currentMap][randCol][randRow] )
		{
			randRow = Random( 0,this.colors[0].length - 1 );
			randCol = Random( 0,this.colors.length - 1 );
		}
		this.colors[randCol][randRow] = "#" + Random( 11,22 ) + Random( 11,22 ) + Random( 22,44 );
	}
	Update( player )
	{
		for( var i = 0; i < this.enemies[this.currentMap].length; ++i )
		{
			this.enemies[this.currentMap][i].UpdateAI();
			if( player.GetX( true ) === this.enemies[this.currentMap][i].GetX() &&
				player.GetY( true ) === this.enemies[this.currentMap][i].GetY() )
			{
				this.deathSounds.forEach( function( sound )
				{
					sound.pause();
					sound.currentTime = 0;
				});
				this.deathSounds[ Random( 0,this.deathSounds.length - 1 ) ].play();
				player.SetDead( true );
			}
			else if( player.GetX( true ) === this.enemies[this.currentMap][i].GetSlimeX() &&
				player.GetY( true ) === this.enemies[this.currentMap][i].GetSlimeY() )
			{
				this.deathSounds[ Random( 0,this.deathSounds.length - 1 ) ].play();
				player.SetDead( true );
			}
		}
		//
		for( var i = 0; i < this.flameThrowers[this.currentMap].length; ++i )
		{
			this.flameThrowers[this.currentMap][i].Update();
			if( player.GetX( true ) === this.flameThrowers[this.currentMap][i].GetFireballX() &&
				player.GetY( true ) === this.flameThrowers[this.currentMap][i].GetFireballY() )
			{
				player.SetDead( true );
			}
			if( player.GetX( true ) === this.flameThrowers[this.currentMap][i].GetX() &&
				player.GetY( true ) === this.flameThrowers[this.currentMap][i].GetY() )
			{
				player.SetDead( true );
			}
		}
		//
		for( var i = 0; i < this.fallingFloors[this.currentMap].length; ++i )
		{
			this.fallingFloors[this.currentMap][i].Update();
			if( player.GetX( true ) === this.fallingFloors[this.currentMap][i].GetX() &&
				player.GetY( true ) === this.fallingFloors[this.currentMap][i].GetY() )
			{
				for( var j = 0; j < this.fallingFloors[this.currentMap].length; ++j )
				{
					this.fallingFloors[this.currentMap][j].Fall();
				}
				if( this.fallingFloors[this.currentMap][i].GetFalling() )
				{
					this.fallSounds[ Random( 0,this.fallSounds.length - 1 ) ].play();
					player.SetDead( true );
				}
			}
		}
		//
		for( var i = 0; i < this.spikes[this.currentMap].length; ++i )
		{
			this.spikes[this.currentMap][i].Update();
			if( player.GetX( true ) === this.spikes[this.currentMap][i].GetX() &&
			player.GetY( true ) === this.spikes[this.currentMap][i].GetY() &&
			this.spikes[this.currentMap][i].GetActive() )
			{
				player.SetDead( true );
			}
		}
	}
	Draw()
	{
		if( this.colorCounter > this.colorCounterMax )
		{
			this.RandomizeTileColor();
			this.colorCounter = 0;
		}
		else
		{
			++this.colorCounter;
		}
		for( var i = 0; i < this.maps[this.currentMap].length; ++i )
		{
			for( var j = 0; j < this.maps[this.currentMap][i].length; ++j )
			{
				Rect( j * 80,i * 80,80,80,this.FindColor( this.maps[this.currentMap][i][j],j,i ) );
			}
		}
		//
		for( var i = 0; i < this.fallingFloors[this.currentMap].length; ++i )
		{
			this.fallingFloors[this.currentMap][i].Draw();
		}
		for( var i = 0; i < this.flameThrowers[this.currentMap].length; ++i )
		{
			this.flameThrowers[this.currentMap][i].Draw();
		}
		for( var i = 0; i < this.enemies[this.currentMap].length; ++i )
		{
			this.enemies[this.currentMap][i].Draw();
		}
		for( var i = 0; i < this.spikes[this.currentMap].length; ++i )
		{
			this.spikes[this.currentMap][i].Draw();
		}
		//
		this.transitionAlpha -= 0.02;
		if( this.transitionAlpha < 0.0 )
		{
			this.transitionAlpha = 0.0;
		}
		for( var i = 0; i < this.maps[this.currentMap].length; ++i )
		{
			for( var j = 0; j < this.maps[this.currentMap][i].length; ++j )
			{
				Rect( j * 80,i * 80,80,80,"#000",this.transitionAlpha );
			}
		}
	}
	FindColor( c,row,col )
	{
		/*
		if( c === 0 )
		{
			// return "#000000";
			return this.colors[col][row];
		}
		else if( c === 1 )
		{
			// return "#464646";
			return this.colors[col][row];
		}
		else if( c === 2 )
		{
			return this.colors[col][row];
		}
		*/
		return this.colors[col][row];
	}
	Transition( nextMap = -50,sceneNum = 0 )
	{
		this.transitionAlpha = 1;
		if( nextMap === -50 )
		{
			// ++this.currentMap;
			if( sceneNum === 0 )
			{
				this.audio0.play();
				this.currentMap = Random( 0,20 );
			}
			else if( sceneNum === 1 )
			{
				// TODO: Finish maps and change this.maps.length - 1 to 41
				this.audio1.play();
				this.currentMap = Random( 21,this.maps.length - 1 );
			}
			else if( sceneNum === 2 )
			{
				this.audio2.play();
				// TODO: Finish maps and change this.maps.length - 1 to 63
				// this.currentMap = Random( 42,this.maps.length - 1 );
			}
		}
		else
		{
			this.currentMap = nextMap;
		}
		for( var i = 0; i < this.fallingFloors[this.currentMap].length; ++i )
		{
			this.fallingFloors[this.currentMap][i].Reset();
		}
		this.InitColors();
		player.SetX( player.GetX( false ) );
		player.SetY( player.GetY( false ) );
		if( nextMap === -50 )
		{
			console.log( "Level " + ( this.currentMap + 1 ) + " loaded successfully!" );
			return( "Success!" );
		}
	}
	PlaySound( num )
	{
		this.fallSounds[0].pause();
		this.fallSounds[0].currentTime = 0;
		this.fallSounds[0].play();
	}
	CheckMouseData( x,y )
	{
		var newX = x;
		var newY = y;
		while( newX % 80 !== 0 )
		{
			--newX;
		}
		while( newY % 80 !== 0 )
		{
			--newY;
		}
		newX /= 80;
		newY /= 80;
		// Text( newX * 80,newY * 80 + 45,this.colors[newY][newX],"#FFFFFF","20PX Arial" );
		var textVal = "Abyss";
		if( this.maps[this.currentMap][newY][newX] )
		{
			textVal = "Ground";
		}
		else
		{
			textVal = "Abyss";
		}
		Text( newX * 80,newY * 80 + 45,textVal,"#FFFFFF","20PX Arial" );
		// console.log( x + " " + y );
	}
	GetLoc( xPos,yPos )
	{
		return this.maps[this.currentMap][ yPos / 80 ][ xPos / 80 ];
	}
	GetCurrentLevel()
	{
		return this.currentMap;
	}
}
