export const drawRect = (detections, ctx) =>{
    detections.forEach(prediction=>{
        
        // Get prediction results
        const [x,y,width, height] = prediction['bbox'];
        const text = prediction['class'];
        
        // Set styling
        const color = "green";
        ctx.strokeStyle = color
        ctx.font = '18px Arial'
        ctx.fillStyle = color
        ctx.lineWidth = 3;
        
        // Draw rectangle
        ctx.beginPath()
        ctx.fillText(text, x-5, y-5)
        ctx.rect(x, y, width, height)
        ctx.stroke() 

    });
}