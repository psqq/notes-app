
ghp:
	yarn build
	rm -rf /tmp/dist/
	cp -r dist /tmp/dist/
	git checkout gh-pages
	rm -rf js index.html
	cp -r /tmp/dist/* .
