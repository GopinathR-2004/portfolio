from PIL import Image

def remove_background(input_path, output_path):
    img = Image.open(input_path).convert("RGBA")
    
    # We want to replace black-ish background with transparent.
    # We can do this by doing a flood-fill from the top-left corner (0,0).
    # Pillow's floodfill doesn't support tolerance out of the box in older versions.
    # So we'll write a simple BFS floodfill with tolerance.
    
    width, height = img.size
    pixels = img.load()
    
    # Visited array to keep track
    visited = set()
    queue = [(0, 0), (width-1, 0), (0, height-1), (width-1, height-1)]
    
    tolerance = 25
    
    def is_bg(r, g, b):
        return r < tolerance and g < tolerance and b < tolerance
        
    while queue:
        x, y = queue.pop(0)
        
        if (x, y) in visited:
            continue
            
        if x < 0 or x >= width or y < 0 or y >= height:
            continue
            
        r, g, b, a = pixels[x, y]
        
        if is_bg(r, g, b):
            pixels[x, y] = (0, 0, 0, 0)
            visited.add((x, y))
            
            # Add neighbors
            queue.append((x+1, y))
            queue.append((x-1, y))
            queue.append((x, y+1))
            queue.append((x, y-1))
            
    img.save(output_path, "PNG")

remove_background("src/assets/real_hand_cursor.png", "src/assets/real_hand_transparent.png")
