// import React, { useState, useEffect } from 'react';

const Table = () => {
	//console.log(data);
	return (
		<div>
			<table>
				<thead><tr><th>Move Data</th></tr></thead>
				<tbody>
					<tr id="table-headers">
						<td>Input</td>
						<td>Damage</td>
						<td>Guard</td>
						<td>Startup Frames</td>
						<td>Active Frames</td>
						<td>Recovery Frames</td>
						<td>On Block</td>
						<td>Invulnerability Frames</td>
					</tr>
					<tr id="table-data">
						<td>-</td>
						<td>-</td>
						<td>-</td>
						<td>-</td>
						<td>-</td>
						<td>-</td>
						<td>-</td>
						<td>-</td>
					</tr>
				</tbody>
			</table>
		</div>
	)
};


export default Table;