let sheet_id = '1fxZF6Rat4AufW64kRVIZQM3E9tz-FhdLAFzidG7MJrQ'

function get_site_main() {
	let sheet_title = 'site_main';
	let sheet_range = 'A2:D2';
	
	let url = 'https://docs.google.com/spreadsheets/d/' + sheet_id + '/gviz/tq?sheet=' + sheet_title + '&range=' + sheet_range
	
	fetch(url)
	.then(res => res.text())
	.then(rep => {
		let data = JSON.parse(rep.substr(47).slice(0, -2));
		
		document.getElementById('hero_title').innerHTML = data.table.rows[0].c[0].v;
		document.getElementById('hero_text').innerHTML = data.table.rows[0].c[1].v;
		document.getElementById('recent_event').innerHTML = data.table.rows[0].c[2].v;
	});
}

function get_photos() {
	let sheet_title = 'site_photos';
	let sheet_range = 'A2:C50';
	
	let url = 'https://docs.google.com/spreadsheets/d/' + sheet_id + '/gviz/tq?sheet=' + sheet_title + '&range=' + sheet_range
	
	fetch(url)
	.then(res => res.text())
	.then(rep => {
		let data = JSON.parse(rep.substr(47).slice(0, -2));
		
		let left = true;
		
		for(let i = 0; i < data.table.rows.length; i++) {
			if(left == true) {
				article = document.createElement('article');
				article.className = 'from-left';
				document.getElementById('photo_gallery').appendChild(article);
				
				article.innerHTML = '<a href=\"' + data.table.rows[i].c[0].v + '\" class=\"image fit\"><img src=\"' + data.table.rows[i].c[1].v + '\" title=\"' + data.table.rows[i].c[2].v + '\" alt=\"\" /></a>';
				
				left = false;
			}
			else {
				article = document.createElement('article');
				article.className = 'from-right';
				
				article.innerHTML = '<a href=\"' + data.table.row[i].c[0].v + '\" class=\"image fit\"><img src=\"' + data.table.row[i].c[1].v + '\" title=\"' + data.table.row[i].c[2].v + '\" alt=\"\" /></a>';
				
				left = true;
			}
		}
	});
}