import requests

url = "https://source.unsplash.com/random"

# print(resp.status_code)
r = requests.head(url, allow_redirects=True)
img = r.url
img = img[: img.find("?crop")]
print(img)
