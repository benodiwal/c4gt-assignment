from app import create_app

app = create_app()

if __name__ != '__main__':
    import logging
    logging.basicConfig(filename='error.log', level=logging.DEBUG)
