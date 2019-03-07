from movieGenre import *

mov = Movie()
mov2 = Movie()
g = Genre()
g2 = Genre()

print(mov2.addRelatedMovie(mov))
print(mov2.setGenre(g))
print(g.movies)