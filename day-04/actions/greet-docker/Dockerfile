# Dockerfile for the "Greet (Docker)" container action.
# Kept tiny on purpose: Alpine + a shell script is enough to demonstrate the
# mechanics without a heavy image.

FROM alpine:3.20

# Copy the entrypoint into the image and make it executable.
COPY entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh

# GitHub runs this when the action is used. `args:` from action.yml become the
# arguments ($1, $2, ...). Inputs are also available as INPUT_* env vars.
ENTRYPOINT ["/entrypoint.sh"]
