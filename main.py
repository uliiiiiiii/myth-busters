
from sentence_transformers import SentenceTransformer
model = SentenceTransformer('sentence-transformers/distiluse-base-multilingual-cased-v2') #- should be multillingual, I need to check it

# model = SentenceTransformer("all-MiniLM-L6-v2")

# Two lists of sentences
sentences1 = [
    "Новий фільм прекрасний",
    "The cat sits outside",
    "Чоловік грає на гітарі",
]

sentences2 = [
    "The dog plays in the garden",
    "The new movie is so great",
    "Жінка дивиться телебачення",
]

# Compute embeddings for both lists
embeddings1 = model.encode(sentences1)
embeddings2 = model.encode(sentences2)

# Compute cosine similarities
similarities = model.similarity(embeddings1, embeddings2)

# Output the pairs with their score
for idx_i, sentence1 in enumerate(sentences1):
    print(sentence1)
    for idx_j, sentence2 in enumerate(sentences2):
        print(f" - {sentence2: <30}: {similarities[idx_i][idx_j]*100:.0f}%")