class Movie:
    def __init__(self):
        self.uuid = ""
        self.title = ""
        self.year = ""
        self.genres = ""
        self.related = []

    def addRelatedMovie(self, m):
        if (type(m) is Movie):
            self.related.append(m)
            return True
        return False

    def setGenre(self, g):
        if(type(g) is Genre):
            self.genres = g
            g.addMovie(self)
            return True
        return False

class Genre:
    def __init__(self):
        self.name = ""
        self.movies = []

    def addMovie(self, m):
        if(type(m) is Movie):
            self.movies.append(m)
            return True
        return False